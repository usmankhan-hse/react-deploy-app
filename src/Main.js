import React from "react";
import { Link } from "react-router-dom";

export const Main = ({ posts }) => {
  return (
    <div className="main">
      {posts.map((post) => (
        <>
        <Link to={`/post/${post.id}`} className="links">
              {post.title}
          <h2>
            
            
          </h2>
          <p>{post.datetime}</p>
          <p className="postBody">
            {post.body.length <= 25
              ? post.body
              : `${post.body.slice(0, 25)}...`}
          </p>

          <hr />
          </Link>
        </>
      ))}
    </div>
  );
};
