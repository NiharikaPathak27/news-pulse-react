// export default function Navbar({ setSearch, setDarkMode, darkMode }) {
//   return (
//     <nav className="main-nav">

//       <div className="logo">⚡ PulseNews</div>

//       {/* Categories */}
//       <div className="nav-links">
//         <button onClick={() => setSearch("sports")}>Sports</button>
//         <button onClick={() => setSearch("technology")}>Technology</button>
//         <button onClick={() => setSearch("india")}>India</button>
//         <button onClick={() => setSearch("politics")}>Politics</button>
//       </div>

//       {/* Search */}
//       <div className="search-bar">
//         <input
//           type="text"
//           placeholder="Search news..."
//           onChange={(e) => setSearch(e.target.value)}
//         />
//       </div>

//       {/* 🌙 Dark Mode Button */}
//       <button onClick={() => setDarkMode(!darkMode)}>
//         {darkMode ? "☀️" : "🌙"}
//       </button>

//     </nav>
//   );
// }



// new code 



import React, { useState } from "react";

function Navbar({ setSearch, setDarkMode, darkMode }) {
  const [input, setInput] = useState("");

  const handleSearch = () => {
    if (input.trim() !== "") {
      setSearch(input);
    }
  };

  return (
    <nav className="main-nav">

      <div className="logo">⚡ PulseNews</div>

      {/* Categories */}
      <div className="nav-links">
        <button onClick={() => setSearch("sports")}>Sports</button>
        <button onClick={() => setSearch("technology")}>Technology</button>
        <button onClick={() => setSearch("india")}>India</button>
        <button onClick={() => setSearch("politics")}>Politics</button>
      </div>

      {/* 🔍 Search */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search news..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
        />

        <button onClick={handleSearch}>Search</button>
      </div>

      {/* 🌙 Dark Mode */}
      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "☀️" : "🌙"}
      </button>

    </nav>
  );
}

export default Navbar;