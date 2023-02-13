import React from 'react'
import {
    enable as enableDarkMode,
    disable as disableDarkMode,
    isEnabled as isDarkReaderEnabled,
  } from "darkreader";
  
//   enableDarkMode({
//     brightness: 90,
//     contrast: 110,
//     sepia: 0,
//   });

const DarkReaderToggle = () => {
  return (
    <div>
        <button>enable</button>
        <button>disable</button>
    </div>
  )
}

export default DarkReaderToggle