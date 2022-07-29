import React from "react";
import "../styles/Post.css";

export default function Post({ post }) {
  const { title, content } = post;
  return (
    <div className="post-wrapper">
      <h1 className="post-title">{title}</h1>
      <p className="post-content">{content}</p>
    </div>
  );
}
