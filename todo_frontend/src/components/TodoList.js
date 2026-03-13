import { TodoItem } from "./TodoItem";

// PUBLIC_INTERFACE
export function TodoList({ todos, onToggle, onDelete }) {
  /** List renderer for todos (empty state included). */
  if (!todos.length) {
    return <p className="muted">No tasks yet. Add one above.</p>;
  }

  return (
    <ul className="todo-list" aria-label="Todo list">
      {todos.map((t) => (
        <TodoItem key={t.id} todo={t} onToggle={onToggle} onDelete={onDelete} />
      ))}
    </ul>
  );
}
