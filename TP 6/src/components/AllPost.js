import React, { useState, useEffect, useContext } from "react";
import "../styles/AllPost.css";
import Post from "./Post";
import { getPost } from "../services/PostService";
import UserContext from "../services/UserContext";
import { Link } from "react-router-dom";

export default function AllPost() {
  const { user } = useContext(UserContext);
  const userId = user.id;

  const [userPosts, setUserPosts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        let data = await getPost(userId);
        setUserPosts(data);
      } catch (error) {}
    };

    getData();
  }, [userId]);

  return (
    <div>
      <div className="allpost-title">
        <h1 className="allpost-title-home allpost-title-container">
          Mis publicaciones
        </h1>
      </div>
      {userPosts.map((post) => (
        <Post key={post.id} post={post} />
      ))}

      <div className="allpost-btn-wrapper">
        <Link className="allpost-btn" to="/CreatePost">
          Crear Publicación
        </Link>
      </div>
    </div>
  );
}
