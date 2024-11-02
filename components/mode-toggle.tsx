"use client";

import { useEffect, useState } from "react";
import { Icons } from "./icons";
import { useTheme } from "next-themes";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="dark:bg-white bg-neutral-900 dark:text-neutral-900 text-neutral-50 rounded-full w-7 h-7 flex items-center justify-center"
    >
      <span className="sr-only">Toggle mode</span>
      {theme === "light" ? (
        <Icons.moon className="h-[14px] w-[14px]" />
      ) : theme === "dark" ? (
        <Icons.sun className="h-[14px] w-[14px]" />
      ) : null}
    </button>
  );
}
