import React, { useState } from "react";
import "./register.css";
import axios from "axios";

const Register = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
      console.log(response?.status);
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

        <input type="submit" />
      </div>
    </form>
  );
};

export default Register;
