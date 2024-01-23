import React from "react";
import { Link } from "react-router-dom";

export const NewPostConfirm = () => {
  return (
    <div className="main">
      <h2>Your post is added successfully.</h2>
      <Link to="/">Go to Home Page</Link>
    </div>
  );
};
