import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
export const ContextPost = createContext();
const PostContext = ({ children }) => {
  const [posts, setPosts] = useState([]);

  const fetchPost = async () => {
    const allPost = await axios.get("http://localhost:4000/posts");
    setPosts(allPost.data);
  };
  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <ContextPost.Provider value={{ posts, fetchPost }}>
      {children}
    </ContextPost.Provider>
  );
};

export default PostContext;
