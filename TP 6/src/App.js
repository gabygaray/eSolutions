import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "./styles/App.css";

import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Home from "./components/Home";
import Register from "./components/Register";
import AllPost from "./components/AllPost";
import NotFound from "./components/NotFound";
import UserContext from "./services/UserContext";
import CreatePost from "./components/CreatePost";

function App() {
  const userDefault = {
    id: "",
    name: "",
    email: "",
    password: "",
  };

  const [user, setUser] = useState(userDefault);
  const [isLogin, setIsLogin] = useState(false);

  return (
    <UserContext.Provider value={{ user, setUser, isLogin, setIsLogin }}>
      <Router>
        <div className="app-wrapper">
          <Navbar />
          <div className="body-wrapper">
            <Routes>
              <Route
                path="/AllPost"
                element={isLogin ? <AllPost /> : <Navigate to="/Login" />}
              />
              <Route
                path="/CreatePost"
                element={isLogin ? <CreatePost /> : <Navigate to="/Login" />}
              />
              <Route path="/" element={<Home />} />
              <Route path="/Register" element={<Register />} />
              <Route path="/Login" element={<Login />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
