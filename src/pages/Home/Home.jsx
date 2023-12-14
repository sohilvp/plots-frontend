import React, { useContext, useState, useEffect } from "react";
import SearchForm from "../../components/SearchForm/SearchForm";
import List from "../../components/List/List";
import FilterList from "../../components/filterList/FilterList";
import { ContextPost } from "../../context/PostContext";

const Home = () => {
  const { posts } = useContext(ContextPost);
  const [allPost, setAllPost] = useState([]);
  const [filterPurpose, setFilterPurpose] = useState([]);
  const [category, setCategory] = useState([]);
  const [display, setDisplay] = useState([]);
  const [onChange, setOnchange] = useState("");

  useEffect(() => {
    setAllPost(posts);
    setFilterPurpose(posts);
    setDisplay(posts);
  }, [posts]);

  useEffect(() => {
    const salePosts = allPost.filter(
      (post) =>
        post &&
        post.place &&
        post.place.toLowerCase().includes(onChange.toLowerCase())
    );
    setDisplay(salePosts);
  }, [onChange, allPost]);

  const handleButtonPurpose = (value) => {
    const collection = category.length !== 0 ? category : allPost;
    const salePosts = collection.filter((post) => post.purpose === value);
    setFilterPurpose(salePosts);
    setDisplay(salePosts);
  };

  const handleButtonCategory = (value) => {
    const collection =
      filterPurpose.length !== 0 && filterPurpose[0]?.category !== value
        ? allPost
        : filterPurpose;
    const salePosts = collection.filter((post) => post.category === value);
    setCategory(salePosts);
    setDisplay(salePosts);
  };

  return (
    <div>
      <SearchForm
        handleButtonPurpose={handleButtonPurpose}
        setOnchange={setOnchange}
      />
      <FilterList handleButtonCategory={handleButtonCategory} />
      <List filterPurpose={display} />
    </div>
  );
};

export default Home;
