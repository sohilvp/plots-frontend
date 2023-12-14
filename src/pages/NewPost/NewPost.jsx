import React, { useContext, useEffect, useState } from "react";
import "./newpost.css";
import axios from "axios";
import { ContextAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { ContextPost } from "../../context/PostContext";
const NewPost = () => {
  const { user } = useContext(ContextAuth);
  const { fetchPost } = useContext(ContextPost);
  const navigate = useNavigate();
  const [file, setFile] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategoty] = useState("building");
  const [purpose, setPurpose] = useState("sale");
  const [contact, setContact] = useState("");
  const [place, setPlace] = useState("");

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, []);

  const handleCreatePost = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://plots-nt5l.onrender.com/createpost",
        {
          photo: file,
          description,
          price,
          category,
          purpose,
          contact,
          place,
        },
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      console.log(response);
      if (response?.status === 201) {
        fetchPost();
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="newPostContainer">
      <h1>create post</h1>
      <div className="formcontainer">
        <form onSubmit={handleCreatePost}>
          <div className="inputfileds">
            <label htmlFor="coverpic">Cover photo:</label>
            <input
              type="file"
              accept="image/*"
              id="coverpic"
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>
          <div className="inputfileds">
            <label htmlFor="description">Discription :</label>
            <input
              type="text"
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="inputfileds">
            <label htmlFor="price">Price :</label>
            <input
              type="text"
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="inputfileds">
            <label htmlFor="category">Categoty :</label>
            <select
              name="category"
              id="category"
              value={category}
              onChange={(e) => setCategoty(e.target.value)}
            >
              <option value="building">building</option>
              <option value="commercial">commercial</option>
              <option value="plot">plot</option>
              <option value="farm">farm</option>
              <option value="resort">resort</option>
            </select>
          </div>
          <div className="inputfileds">
            <label htmlFor="purpose">for :</label>
            <select
              name="purpose"
              id="purpose"
              value={purpose}
              onChange={(e) => setPurpose(e.target.value)}
            >
              <option value="sale">sale</option>
              <option value="rent">rent</option>
              <option value="book">book</option>
            </select>
          </div>
          <div className="inputfileds">
            <label htmlFor="contact">Contact :</label>
            <input
              type="text"
              id="contact"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
            />
          </div>
          <div className="inputfileds">
            <label htmlFor="place">Place :</label>
            <input
              type="text"
              id="place"
              value={place}
              onChange={(e) => setPlace(e.target.value)}
            />
          </div>
          <button type="submit" className="createButton">
            {" "}
            create
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewPost;
