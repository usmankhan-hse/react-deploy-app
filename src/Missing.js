import React from "react";
import { Link } from "react-router-dom";

const Missing = () => {
  return (
    <div className="main">
      Sorry. No post is available.
      <Link to={"/"}>Go to Home Page</Link>
    </div>
  );
};

export default Missing;
