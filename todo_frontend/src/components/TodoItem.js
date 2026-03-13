// PUBLIC_INTERFACE
export function TodoItem({ todo, onToggle, onDelete }) {
  /** Single todo row with complete + delete controls. */
  return (
    <li className={`todo-item ${todo.completed ? "is-complete" : ""}`}>
      <label className="todo-label">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          aria-label={`Mark "${todo.text}" as ${
            todo.completed ? "incomplete" : "complete"
          }`}
        />
        <span className="todo-title">{todo.text}</span>
      </label>

      <button
        className="btn btn-danger"
        type="button"
        onClick={() => onDelete(todo.id)}
        aria-label={`Delete "${todo.text}"`}
      >
        Delete
      </button>
    </li>
  );
}
