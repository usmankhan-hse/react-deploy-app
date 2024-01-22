import React from "react";
import { useParams, Link } from "react-router-dom";

const PostPage = ({ posts, handleDelete }) => {
  const { id } = useParams();
  const post = posts.find((post) => post.id == id);
  if (post) {
    return (
      <div className="main">
        <h2>{post.title}</h2>
        {post.datetime}
        <br></br>
        {post.body}
        <br />
        <Link to="/">
          <button id="deleteBtn" onClick={() => handleDelete(post.id)}>
            Delete Post
          </button>
        </Link>
      </div>
    );
  } else {
    return (
      <div className="main">
        <p>Unfortunately, no such post is available.</p>
        <Link to={"/"}>Go to Home Page</Link>
      </div>
    );
  }
};

export default PostPage;
