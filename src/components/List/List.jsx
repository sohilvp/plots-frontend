import React from "react";
import "./list.css";
import SingleList from "../SingleList/SingleList";
const List = ({ filterPurpose }) => {
  return (
    <div className="listContainer">
      {filterPurpose?.map((post, i) => {
        return <SingleList key={i} post={post} />;
      })}
    </div>
  );
};

export default List;
