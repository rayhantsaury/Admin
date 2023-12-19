import React, { useContext, useEffect, useState } from "react";
import "./product.css";
import { Context } from "../../context/Context";
import axios from "axios";

export default function Contact() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newProduct = {
      username: user.username,
      name,
      price,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);

      newProduct.photo = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) {}
    }
    try {
    await axios.post("/products", newProduct);
      window.location.replace("/about" );
    } catch (err) {}
  };

  return (
    <div className="write">
      <div className="writeWrapper">
        {file && (
          <img src={URL.createObjectURL(file)} alt="" className="writeImg" />
        )}
        <form className="writeForm" onSubmit={handleSubmit}>
          <div className="formGroup">
            <label htmlFor="fileInput">
              <i class="fas fa-plus writeIcon"></i>
            </label>
            <input
              type="file"
              id="fileInput"
              style={{ display: "none" }}
              onChange={(e) => setFile(e.target.files[0])}
            />
            <input
              type="text"
              className="writeInput"
              placeholder="Nama Prodcut"
              autoFocus={true}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="formGroup selectDiv">
            <textarea
              className="textInput"
              type="text"
              placeholder="Harga Product"
              onChange={(e) => setPrice(e.target.value)}
            ></textarea>
          </div>
          <button className="writeBtn" type="submit">
            Publish
          </button>
        </form>
      </div>
    </div>
  );
}
