import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

type ThemeMode = "light" | "dark";

function getInitialMode(): ThemeMode {
  if (typeof window === "undefined") return "light";
  const stored = window.localStorage.getItem("theme");
  return stored === "dark" ? "dark" : "light";
}

function applyTheme(mode: ThemeMode) {
  const root = document.documentElement;
  root.classList.remove("light", "dark");
  root.classList.add(mode);
  root.setAttribute("data-theme", mode);
  root.style.colorScheme = mode;
}

export default function ThemeToggle() {
  const [mode, setMode] = useState<ThemeMode>("light");

  useEffect(() => {
    const initial = getInitialMode();
    setMode(initial);
    applyTheme(initial);
  }, []);

  function toggle() {
    const next: ThemeMode = mode === "light" ? "dark" : "light";
    setMode(next);
    applyTheme(next);
    window.localStorage.setItem("theme", next);
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={
        mode === "light" ? "ダークモードに切り替え" : "ライトモードに切り替え"
      }
      title={mode === "light" ? "ダークモード" : "ライトモード"}
      className="rounded-full border border-[var(--chip-line)] bg-[var(--chip-bg)] w-9 h-9 flex items-center justify-center text-[var(--ink-soft)] shadow-sm transition hover:-translate-y-0.5 hover:text-[var(--ink)] hover:border-[var(--spice-soft)]"
    >
      {mode === "light" ? (
        <Moon size={15} strokeWidth={2} />
      ) : (
        <Sun size={15} strokeWidth={2} />
      )}
    </button>
  );
}
