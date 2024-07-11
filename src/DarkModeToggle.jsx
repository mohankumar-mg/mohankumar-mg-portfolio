// DarkModeToggle.js

import React, { useState } from 'react';

function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  function toggleDarkMode() {
    const isDarkMode = !darkMode;
    setDarkMode(isDarkMode);
    document.documentElement.classList.toggle('dark', isDarkMode);
  }
  
  return (
    <button onClick={toggleDarkMode} className="absolute bottom-4 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded-lg bg-blue-500 text-white border-4 border-blue-700 hover:bg-blue-600 hover:border-blue-800">
      click me
    </button>
  );
}

export default DarkModeToggle;
