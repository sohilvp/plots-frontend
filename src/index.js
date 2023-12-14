import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import PostContext from "./context/PostContext";
import AuthContext from "./context/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <PostContext>
      <AuthContext>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AuthContext>
    </PostContext>
  </React.StrictMode>
);
