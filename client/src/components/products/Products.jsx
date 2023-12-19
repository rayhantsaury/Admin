import React from "react";
import Product from "../product/Product";
import "./products.css";

export default function Products({ products }) {
  return (
    <div className="posts">
      {products.map((product) => (
        <Product key={product._id} product={product}/>
      ))}
    </div>
  );
}