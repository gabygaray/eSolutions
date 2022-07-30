import React from "react";
import "../styles/Post.css";
import { deletePost } from "../services/PostService";

export default function Post({ post }) {
  const { title, content, id } = post;

  const handleDelete = () => {
    deletePost(id);
  };

  return (
    <div className="post-wrapper">
      <div className="post-title">
        <div>{title}</div>
        <div
          title="Eliminar post"
          onClick={handleDelete}
          className="post-delete"
        >
          X
        </div>
      </div>
      <p className="post-content">{content}</p>
    </div>
  );
}
