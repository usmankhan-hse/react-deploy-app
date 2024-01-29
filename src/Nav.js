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
          <li className="items"><Link to="/" className="nav-links">Home</Link>    </li>
          <li className="items"><Link to="/NewPost" className="nav-links">Post</Link></li>
          <li className="items"><Link to="/about" className="nav-links">About</Link></li>
        </ul>
      </div>
    </nav>
  );
};
