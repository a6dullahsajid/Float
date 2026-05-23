import React, { useState, useEffect } from "react";

const DarkMode = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light",
  );

  const element = document.documentElement;

  useEffect(() => {
    localStorage.setItem("theme", theme);

    if (theme === "dark") {
      element.classList.add("dark");
    } else {
      element.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <div
      onClick={toggleTheme}
      className="w-10 h-5 border border-gray-500 rounded-full flex items-center dark:border-slate-500 dark:bg-gray-400 dark:justify-end p-0.5 transition-all duration-300 cursor-pointer"
    >
      <div className="rounded-full bg-gray-500 dark:bg-slate-800 h-3 w-3 transition-all duration-300"></div>
    </div>
  );
};

export default DarkMode;
