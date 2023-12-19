import React from "react";
import "./product.css";
import { format } from "timeago.js";

export default function Product({ product }) {
  const PF = 'http://localhost:5000/images/'
  return (
    <div className="post">
        <div className="postWrapper">
          {product.photo && <img src={PF+product.photo} alt="" className="postImg" />}
          <div className="postInfo">
            <div className="postCategory">
              {product.category}
            </div>
            <h4 className="postTitle">{product.name}</h4>
            <div className="creation">
              <span className="postDate">
                {new Date(product.createdAt).toDateString()}
              </span>
              <span className="postTime">{format(product.createdAt)}</span>
            </div>
          </div>
          <p className="postDescription">{product.price}</p>
        </div>
    </div>
  );
}
