import { useState } from "react";

// PUBLIC_INTERFACE
export function TodoInput({ onAdd }) {
  /** Controlled input + submit for creating a new todo. */
  const [text, setText] = useState("");

  const submit = (e) => {
    e.preventDefault();
    const trimmed = text.trim();
    if (!trimmed) return;
    onAdd(trimmed);
    setText("");
  };

  return (
    <form className="todo-input" onSubmit={submit}>
      <input
        className="todo-text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a task…"
        aria-label="New todo"
      />
      <button className="btn" type="submit">
        Add
      </button>
    </form>
  );
}
