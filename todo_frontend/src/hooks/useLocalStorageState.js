import { useEffect, useState } from "react";

/**
 * Safely parse JSON from localStorage.
 * Falls back to the provided default value on any error.
 */
function readJson(key, defaultValue) {
  try {
    const raw = window.localStorage.getItem(key);
    return raw == null ? defaultValue : JSON.parse(raw);
  } catch {
    return defaultValue;
  }
}

// PUBLIC_INTERFACE
export function useLocalStorageState(key, defaultValue) {
  /**
   * React state synchronized with localStorage.
   *
   * @param {string} key localStorage key
   * @param {any} defaultValue initial value when nothing is stored (or parse fails)
   * @returns {[any, Function]} [value, setValue]
   */
  const [value, setValue] = useState(() => readJson(key, defaultValue));

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch {
      // Ignore storage write failures (e.g., privacy mode / quota exceeded)
    }
  }, [key, value]);

  return [value, setValue];
}
