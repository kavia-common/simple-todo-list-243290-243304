import React, { useEffect, useMemo } from "react";
import logo from "./logo.svg";
import "./App.css";
import { ThemeToggle } from "./components/ThemeToggle";
import { TodoInput } from "./components/TodoInput";
import { TodoList } from "./components/TodoList";
import { useLocalStorageState } from "./hooks/useLocalStorageState";

function makeId() {
  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

// PUBLIC_INTERFACE
function App() {
  /** Main app container for theme + todos. Keeps UI logic in small components. */
  const [theme, setTheme] = useLocalStorageState("theme", "light");
  const [todos, setTodos] = useLocalStorageState("todos", []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const stats = useMemo(() => {
    const total = todos.length;
    const completed = todos.filter((t) => t.completed).length;
    return { total, completed };
  }, [todos]);

  // PUBLIC_INTERFACE
  const toggleTheme = () => setTheme((t) => (t === "light" ? "dark" : "light"));

  // PUBLIC_INTERFACE
  const addTodo = (text) => {
    const next = { id: makeId(), text, completed: false };
    setTodos((prev) => [next, ...prev]);
  };

  // PUBLIC_INTERFACE
  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  // PUBLIC_INTERFACE
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <div className="App">
      <header className="App-header">
        <ThemeToggle theme={theme} onToggle={toggleTheme} />

        <img src={logo} className="App-logo" alt="React logo" />
        <h1 className="title">Retro Todo</h1>
        <p className="subtitle">
          {stats.completed}/{stats.total} completed
        </p>

        <div className="todo-card">
          <TodoInput onAdd={addTodo} />
          <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
        </div>
      </header>
    </div>
  );
}

export default App;
