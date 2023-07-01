import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const [product, setProduct] = useState({
    name: "",
    dimensions: "",
    wattage: "",
    efficiencyPercentage: "",
    warranty: "",
    weight: "",
    price: "",
    currentStock: "",
    minimunStock: "",
    serialNumber: "",
    category_id: ""
  });

  const navigate = useNavigate();

  const handleProductChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleProductSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3001/products", product);
      navigate("/products");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="add-product">
      <h2>Add New Product</h2>
      <form onSubmit={handleProductSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={product.name}
            onChange={handleProductChange}
          />
        </div>
        <div>
          <label htmlFor="dimensions">Dimensions:</label>
          <input
            type="text"
            id="dimensions"
            name="dimensions"
            value={product.dimensions}
            onChange={handleProductChange}
          />
        </div>
        <div>
          <label htmlFor="wattage">Wattage:</label>
          <input
            type="text"
            id="wattage"
            name="wattage"
            value={product.wattage}
            onChange={handleProductChange}
          />
        </div>
        <div>
          <label htmlFor="efficiencyPercentage">Efficiency:</label>
          <input
            type="text"
            id="efficiencyPercentage"
            name="efficiencyPercentage"
            value={product.efficiencyPercentage}
            onChange={handleProductChange}
          />
        </div>
        <div>
          <label htmlFor="warranty">Warranty:</label>
          <input
            type="text"
            id="warranty"
            name="warranty"
            value={product.warranty}
            onChange={handleProductChange}
          />
        </div>
        <div>
          <label htmlFor="weight">Weight:</label>
          <input
            type="text"
            id="weight"
            name="weight"
            value={product.weight}
            onChange={handleProductChange}
          />
        </div>
        <div>
          <label htmlFor="price">Price:</label>
          <input
            type="text"
            id="price"
            name="price"
            value={product.price}
            onChange={handleProductChange}
          />
        </div>
        <div>
          <label htmlFor="currentStock">Current Stock:</label>
          <input
            type="text"
            id="currentStock"
            name="currentStock"
            value={product.currentStock}
            onChange={handleProductChange}
          />
        </div>
        <div>
          <label htmlFor="minimumStock">Minimum Stock:</label>
          <input
            type="text"
            id="minimunStock"
            name="minimunStock"
            value={product.minimunStock}
            onChange={handleProductChange}
          />
        </div>
        <div>
          <label htmlFor="serialNumber">Serial Number:</label>
          <input
            type="text"
            id="serialNumber"
            name="serialNumber"
            value={product.serialNumber}
            onChange={handleProductChange}
          />
        </div>
        <div>
          <label htmlFor="category_id">Category:</label>
          <input
            type="text"
            id="category_id"
            name="category_id"
            value={product.category_id}
            onChange={handleProductChange}
          />
        </div>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;

