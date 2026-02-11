import React, { useState } from "react";
import "./DropDown.css";

export const DropDown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Pasirinkite savybę");

  const options = ["Su fotografo vandenženkliu", "Be fotografo vandenženklio"];

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