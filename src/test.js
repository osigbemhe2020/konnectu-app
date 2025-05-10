import React from 'react';
import './konnect.css';
import { useState } from 'react';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const handleClose = () => setIsOpen(false);

  return (
    <div className="dropdown-container">
      <div className="dropdown-head" onClick={toggleDropdown}>
        <span>Date</span>
        <span className="arrow">{isOpen ? "▲" : "▼"}</span>
      </div>

      {isOpen && (
        <ul className="dropdown-list">
          {["Last 1 Week", "Last 2 Weeks", "Last 1 Month", "Last 5 Months"].map(
            (item, index) => (
              <li
                key={index}
                onClick={handleClose}
                className="dropdown-item"
              >
                <input type="radio" name="date" style={{ marginRight: "8px" }} />
                {item}
              </li>
            )
          )}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
