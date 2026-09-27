import React, { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

const Content = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div>
      <p>
        Current Theme is <strong>{theme}</strong>
      </p>
    </div>
  );
};

export default Content;
