import React, { useContext, useEffect, useRef } from "react";
import { ContextAuth } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import "./login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const { setUser } = useContext(ContextAuth);
  const navigate = useNavigate();
  const userRef = useRef();
  const passwordRef = useRef();
  const fetchUser = async (e) => {
    try {
      e.preventDefault();
      const user = await axios.post(
        "https://plots-backend.onrender.com/login",
        {
          email: userRef.current.value,
          password: passwordRef.current.value,
        }
      );
      setUser(user.data);
      console.log(user.status);
      if (user?.status === 200) {
        navigate("/");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form className="form_container container" onSubmit={fetchUser}>
      <h1>Login</h1>
      <input type="text" ref={userRef} placeholder="Email" />
      <input type="password" ref={passwordRef} placeholder="Password" />
      <p>
        New user ?<Link to="/register"> Create account</Link>
      </p>
      <input type="submit" value={"Login"} />
    </form>
  );
};

export default Login;
