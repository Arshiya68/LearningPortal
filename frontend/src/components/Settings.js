import React, { useState, useEffect } from "react";

const Settings = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.body.style.backgroundColor = theme === "light" ? "#f0f2f5" : "#121212";
    document.body.style.color = theme === "light" ? "#000" : "#fff";
  }, [theme]);

  const handleThemeChange = (e) => {
    setTheme(e.target.value);
  };

  return (
    <div style={styles.container}>
      <h2>Settings</h2>
      <div style={styles.option}>
        <label style={styles.label}>Select Theme:</label>
        <select value={theme} onChange={handleThemeChange} style={styles.select}>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </div>
    </div>
  );
};

const styles = {
  container: { padding: "50px", fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" },
  option: { marginTop: "20px" },
  label: { marginRight: "10px", fontWeight: "bold" },
  select: { padding: "8px", borderRadius: "6px", border: "1px solid #ccc" },
};

export default Settings;
