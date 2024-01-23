import React from "react";
import { useNavigate } from "react-router-dom";

const NewPost = ({ handleAdd, setNewPostBody, setNewPostTitle }) => {
  const navigate = useNavigate();
  return (
    <div className="main">
      <h2>New Post</h2>
      <form action="">
        <label htmlFor="">Title:</label>
        <input
          type="text"
          name="titleTextName"
          id="titleTextId"
          className="titleText"
          onChange={(e) => setNewPostTitle(e.target.value)}
        />
        <label htmlFor="">Post:</label>
        <textarea
          name="postTextName"
          id="postTextId"
          cols="30"
          rows="5"
          onChange={(e) => setNewPostBody(e.target.value)}
        ></textarea>
        <button
          type="submit"
          className="submit"
          onClick={(e) => {
            e.preventDefault();
            handleAdd();
            navigate("/NewPostConfirm");
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default NewPost;
