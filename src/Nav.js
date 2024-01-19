import React from "react";
import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <nav className="Nav">
      <input
        type="text"
        className="searchBox"
        autoFocus
        placeholder="Find Post"
      />

      <div>
        <ul className="listItems">
          <li className="items">Home</li>
          <li className="items">Post</li>
          <li className="items">About</li>
        </ul>
      </div>
    </nav>
  );
};
