import { Moon, Sun } from "@phosphor-icons/react";
import { useState, useEffect } from "react";

export default function SwitchMode() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  function toggleDarkMode() {
    setIsDark((prev) => !prev);
    if (!isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }
  return (
    <div className="absolute right-4 top-4">
      <div
        onClick={toggleDarkMode}
        className="relative border border-amethyst-900 w-16 bg-amethyst-100 dark:bg-white/10 h-6 rounded-full flex items-center transition-all duration-300"
      >
        {/* SWITCH SUN */}
        <div
          className={`absolute cursor-pointer rounded-full p-2 bg-white size-8 shadow-md flex items-center justify-center hover:outline-8 transition-transform duration-300 transform ${
            isDark
              ? "translate-x-10 hover:outline-white/20"
              : "-translate-x-1 hover:outline-black/10"
          }`}
        >
          {isDark ? (
            <Moon className="text-amethyst-950" />
          ) : (
            <Sun className="text-amethyst-950" />
          )}
        </div>
      </div>
    </div>
  );
}
