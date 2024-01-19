import React from "react";
import { useParams, Link } from "react-router-dom";

const PostPage = ({ posts, handleDelete }) => {
  const { id } = useParams();
  const post = posts.find((post) => post.id == id);
  return (
    <main>
      <h2>{post.title}</h2>
      {post.datetime}
      <br></br>
      {post.body}
    </main>
  );
};

export default PostPage;
