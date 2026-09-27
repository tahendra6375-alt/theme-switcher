import React, { useState } from "react";
import { ThemeContext } from "./ThemeContext";
import Header from "./components/Header";
import Content from "./components/Content";

const App = () => {
  const [theme, setTheme] = useState("light"); // default theme

  // Theme toggle function
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div
        style={{
          backgroundColor: theme === "light" ? "#f5f5f5" : "#333",
          color: theme === "light" ? "#333" : "#f5f5f5",
          minHeight: "100vh",
          padding: "20px",
        }}
      >
        <Header />
        <Content />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
