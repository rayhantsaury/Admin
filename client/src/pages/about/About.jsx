import React, { useEffect, useState } from "react";
import "./about.css";
import Header from "../../components/header/Header";
import Products from "../../components/products/Products";
import axios from "axios";
import { useLocation } from "react-router-dom";

export default function About() {
  const [products, setProducts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await axios.get("/products" + search);
      setProducts(res.data);
    };
    fetchProducts();
  }, [search]);
  return (
    <>
      <Header />
      <div className="home">
        <Products products={products}/>
      </div>
    </>
  );
}
