import React from "react";
import { Link } from "react-router-dom";

export const Main = ({ posts }) => {
  return (
    <div className="main">
      {posts.map((post) => (
        <>
          <h2>
            <Link to={`/post/${post.id}`} className="links">
              {post.title}
            </Link>
          </h2>
          <p>{post.datetime}</p>
          <p className="postBody">
            {post.body.length <= 25
              ? post.body
              : `${post.body.slice(0, 25)}...`}
          </p>

          <hr />
        </>
      ))}
    </div>
  );
};
