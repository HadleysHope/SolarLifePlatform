import React, { useEffect, useState } from "react";
import "./Inventory.css";
import axios from "axios";
import {useNavigate} from "react-router-dom";


const Inventory = () => {
  const[products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3001/products');
        console.log(response.data);
        setProducts(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, []);

  const handleEdit = (productId) => {
    // Redirect to the edit page with the product ID
    navigate(`/edit-product/${productId}`);
  };

  const handleDelete = async (productId) => {
    console.log("Delete product:", productId);
    try {
      await axios.delete(`http://localhost:3001/products/${productId}`);
      setProducts(products.filter((product) => product._id !== productId));
    } catch (error) {
      console.error(error);
    }
  };

  if (products.length === 0) {
    return <div>Loading...</div>;
  }
  
  const handleAddProduct = async (productId) => {
    console.log("Add new Product", productId );
    navigate("/add-product");
  }

  return (
    <section className="dashboard-content">
      <div className="stock-content">
        <div className="panel">
          <h3>Total Panels Sold</h3>
          <p className="placeholder">254</p>
        </div>
        <div className="panel">
          <h3>Top Selling Panel</h3>
          <p className="placeholder">Model-Solar Panel A</p>
        </div>
        <div className="panel">
          <h3>Total Revenue</h3>
          <p className="placeholder">$50,000</p>
        </div>
      </div>
      <div className="product-list">
        <hr />
        <div className="table">
          <div className="--flex-between --flex-dir-column">
            <span>
              <h3>Inventory Items</h3>
            </span>
          </div>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Dimensions</th>
                <th>Wattage</th>
                <th>Efficiency</th>
                <th>Warranty</th>
                <th>Weight</th>
                <th>Price</th>
                <th>Current Stock</th>
                <th>Minimum Stock</th>
                <th>Serial Number</th>
                <th>Category</th>
                <th>Value</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product._id}>
                  <td>{product.name}</td>
                  <td>{product.dimensions}</td>
                  <td>{product.wattage}</td>
                  <td>{product.efficiencyPercentage}</td>
                  <td>{product.warranty}</td>
                  <td>{product.weight}</td>
                  <td>{product.price}</td>
                  <td>{product.currentStock}</td>
                  <td>{product.minimunStock}</td>
                  <td>{product.serialNumber}</td>
                  <td>{product.category_id}</td>
                  <td>{product.price * product.currentStock}</td>
                  <td>
                    <button onClick={() => handleEdit(product._id)}>
                      <i className="fa fa-edit"></i> Edit
                    </button>
                    <button onClick={() => handleDelete(product._id)}>
                      <i className="fa fa-trash"></i> Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button onClick={handleAddProduct}>
            <i className="faplus">Add New Product</i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Inventory;

