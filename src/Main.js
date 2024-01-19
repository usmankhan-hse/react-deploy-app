import React from "react";
import { Link } from "react-router-dom";

export const Main = ({ posts }) => {
  return (
    <div className="main">
      {posts.map((post) => (
        <>
          <h2>
            <Link to={`/post/${post.id}`}>{post.title}</Link>
          </h2>
          {post.datetime}
          <br></br>
          {post.body}
          <hr />
        </>
      ))}
    </div>
  );
};
