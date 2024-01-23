import React from "react";

const NewPost = () => {
  return (
    <div className="main">
      <h2>New Post</h2>
      <form action="" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="">Title:</label>
        <input
          type="text"
          name="titleTextName"
          id="titleTextId"
          className="titleText"
        />
        <label htmlFor="">Post:</label>
        <textarea
          name="postTextName"
          id="postTextId"
          cols="30"
          rows="5"
        ></textarea>
        <button type="submit" className="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default NewPost;
