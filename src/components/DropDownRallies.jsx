import React, { useState, useEffect } from "react";

export const DropDownRallies = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Choose");
  const [options, setOptions] = useState([]);

  // Fetch rallies from backend
  useEffect(() => {
    fetch("https://enebabackend.onrender.com/allrallies")
      .then((res) => res.json())
      .then((data) => {
        // assuming data is an array of strings like ["Choice 1", "Choice 2"]
        setOptions(data.map(item => item.rally_name));
      })
      .catch((err) => console.error("Error fetching rallies:", err));
  }, []);

  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
  };

  return (
    <div className="dropdown">
      <div
        className="dropdown-header"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selected}
        <span className="arrow">{isOpen ? "▲" : "▼"}</span>
      </div>

      {isOpen && (
        <div className="dropdown-list">
          {options.map((option, index) => (
            <div
              key={index}
              className="dropdown-item"
              onClick={() => handleSelect(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};