import React from "react";

import "./singlepost.css";
import { basetoString } from "../../functions/basetoString";

const SingleList = ({ post }) => {
  return (
    <>
      {[post]?.map((post, i) => {
        return (
          <div className="singlePostContainer" key={i}>
            <div className="singlepostLeft">
              <img
                src={
                  post.photo
                    ? `data:image/png;base64,${basetoString(
                        post.photo.data.data
                      )}`
                    : ""
                }
                alt=""
              />
            </div>
            <div className="singlepostRight">
              <ul>
                <li>
                  <h3>&#8377; {post.price}</h3>
                </li>
                <li>
                  <h5>{post.description}</h5>
                </li>
                <li>location : {post.place}</li>
                <li>category : {post.category}</li>
                <li>purpose : {post.purpose}</li>
                <li>contact : {post.contact}</li>
              </ul>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default SingleList;
