// PUBLIC_INTERFACE
export function ThemeToggle({ theme, onToggle }) {
  /** Button that toggles light/dark theme. */
  const nextTheme = theme === "light" ? "dark" : "light";

  return (
    <button
      className="theme-toggle"
      onClick={onToggle}
      aria-label={`Switch to ${nextTheme} mode`}
      type="button"
    >
      {theme === "light" ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}
