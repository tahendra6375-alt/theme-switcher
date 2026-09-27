import React, { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div style={{ marginBottom: "20px" }}>
      <h1>Theme Switcher App</h1>
      <button onClick={toggleTheme}>
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button>
    </div>
  );
};

export default Header;
