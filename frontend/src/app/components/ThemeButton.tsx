"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog, faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export default function ThemeButton() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <FontAwesomeIcon icon={faCog} className="fa-spin" />;
  }

  if (resolvedTheme === "dark") {
    return (
      <button
        onClick={() => setTheme("light")}
        className="text-xl hover:text-deep-ocean-900 dark:hover:text-deep-ocean-200 transition ease-in-out"
      >
        <FontAwesomeIcon icon={faMoon} />
      </button>
    );
  }

  if (resolvedTheme === "light") {
    return (
      <button
        onClick={() => setTheme("dark")}
        className="text-xl hover:text-deep-ocean-900 dark:hover:text-deep-ocean-200 transition ease-in-out"
      >
        <FontAwesomeIcon icon={faSun} />
      </button>
    );
  }
}
