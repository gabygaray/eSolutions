import React, { useState, useContext } from "react";
import "../styles/CreatePost.css";
import { setPost } from "../services/PostService";
import UserContext from "../services/UserContext";
import { useNavigate } from "react-router-dom";

export default function CreatePost() {
  const { user } = useContext(UserContext);
  const userId = user.id;

  const navigate = useNavigate();

  const [newPost, setNewPost] = useState({
    title: "",
    content: "",
    userId: userId,
  });

  const handleChange = (event) => {
    let { name, value } = event.target;
    setNewPost({ ...newPost, [name]: value });
  };

  const savePost = async (event) => {
    event.preventDefault();
    try {
      await setPost(newPost);
      navigate("/allpost");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="createpost-wrapper">
      <h2 className="createpost-title createpost-title-container">
        Cree una nueva historia
      </h2>
      <form onSubmit={savePost}>
        <div className="createpost-body">
          <label htmlFor="title" className="createpost-input-label">
            Título
          </label>
          <input
            name="title"
            type="text"
            className="createpost-input"
            placeholder="Escriba un título"
            required
            onChange={handleChange}
            autoComplete="off"
          />

          <label htmlFor="content" className="createpost-input-label">
            Tu historia
          </label>
          <textarea
            name="content"
            type="text"
            className="createpost-input createpost-input-textarea"
            placeholder="Escribe tu historia"
            required
            onChange={handleChange}
          />

          <div className="createpost-btn-wrapper">
            <button type="submit" className="createpost-btn">
              Guardar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
