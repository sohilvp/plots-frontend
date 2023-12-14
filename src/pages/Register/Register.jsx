import React, { useState } from "react";
import "./register.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const createUser = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://plots-backend.onrender.com/register",
        {
          username: userName,
          email,
          password,
        }
      );
      if (response?.status === 201) {
        navigate("/login");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <form className="register_container" onSubmit={createUser}>
      <h1>Register</h1>

      <div className="register_right">
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="Username"
        />
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />

        <input type="submit" value={"Register"} />
      </div>
    </form>
  );
};

export default Register;
