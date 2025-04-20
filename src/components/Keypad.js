// Keypad.js

import React from 'react';

function Keypad() {
  // Event handler for when the input changes
  const handleChange = () => {
    console.log("Entering password...");
  };

  return (
    <div>
      <input 
        type="password" 
        onChange={handleChange} 
        placeholder="Enter password"
      />
    </div>
  );
}

export default Keypad;
