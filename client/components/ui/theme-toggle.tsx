import { useEffect, useState } from "react";

const STORAGE_KEY = "iris-theme";

const getInitialTheme = () => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "dark" || stored === "light") return stored;
  } catch {}
  if (typeof window !== "undefined" && window.matchMedia) {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  return "light";
};

export default function ThemeToggle() {
  const [theme, setTheme] = useState<string>(() => (typeof window === "undefined" ? "light" : getInitialTheme()));

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch {}
    const root = document.documentElement;
    if (theme === "dark") root.classList.add("dark");
    else root.classList.remove("dark");
  }, [theme]);

  const toggle = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  const prefersReducedMotion = typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  return (
    <button
      aria-label="Toggle theme"
      onClick={toggle}
      className="relative inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/50 bg-background/70 p-2 text-sm text-foreground transition-colors duration-300 hover:bg-background/80 focus:outline-none"
    >
      {/* expanding glow */}
      <span
        aria-hidden="true"
        className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-9 w-9 rounded-full bg-accent/30 blur-2xl transition-transform transition-opacity duration-700 ${prefersReducedMotion ? "opacity-0 scale-100" : ""} ${theme === "dark" ? "opacity-100 scale-125" : "opacity-0 scale-0"} -z-10`}
      />

      {/* container for icon states */}
      <span className="relative flex h-5 w-5 items-center justify-center">
        {/* Sun icon (light) */}
        <svg
          className={`absolute z-10 transition-transform duration-500 ${prefersReducedMotion ? "" : "motion-safe:translate-y-0"} ${theme === "light" ? "opacity-100 rotate-0 scale-100" : "opacity-0 -translate-y-2 rotate-45 scale-75"}`}
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
          <path d="M12 2v1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M12 21v1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M4.2 4.2l.7.7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M19.1 19.1l.7.7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M2 12h1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M21 12h1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M4.2 19.8l.7-.7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M19.1 4.9l.7-.7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>

        {/* Moon icon (dark) */}
        <svg
          className={`absolute z-10 transition-transform duration-500 ${prefersReducedMotion ? "" : "motion-safe:translate-y-0"} ${theme === "dark" ? "opacity-100 translate-y-0 rotate-0 scale-100" : "opacity-0 translate-y-2 -rotate-45 scale-75"}`}
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    </button>
  );
}
