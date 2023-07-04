import React, { useEffect, useState } from "react";
import "./Inventory.css";
import axios from "axios";
import { validateUserInput } from "./validateUserInput";
import { formatCurrency } from "../../../utils/utils";


const Inventory = () => {
  const [products, setProducts] = useState([]);
  const [editMode, setEditMode] = useState({});
  const [showAddProduct, setShowAddProduct] = useState(false);
  const [newProduct, setNewProduct] = useState({
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
    category_id: "",
  });

  const [totalBatteryStock, setTotalBatteryStock] = useState(0);
  const [totalPanelStock, setTotalPanelStock] = useState(0);
  const [totalStockValue, setTotalStockValue] = useState("0");

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:3001/products");
        setProducts(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, []);



  useEffect(() => {
    const calculateStockValues = () => {
      let batteryStock = 0;
      let panelStock = 0;
      let stockValue = 0;

      products.forEach((product) => {
        if (product.category_id === "Battery") {
          batteryStock += parseInt(product.currentStock, 10);
        } else if (product.category_id === "Solar Panel") {
          panelStock += parseInt(product.currentStock, 10);
        }
        stockValue += product.price * product.currentStock;
      });

      setTotalBatteryStock(batteryStock);
      setTotalPanelStock(panelStock);
      setTotalStockValue(stockValue.toLocaleString(undefined, {
        style: "currency",
        currency: "NZD",
      }));
    };

    calculateStockValues();
  }, [products]);
 

  const handleEdit = (productId) => {
    setEditMode((prevEditMode) => ({
      ...prevEditMode,
      [productId]: true,
    }));
  };

  const handleSave = async (productId, updatedProduct, e) => {
    e.preventDefault();

    let userInputPassed = validateUserInput(updatedProduct, e);

    if (userInputPassed) {
      try {
        await axios.put(
          `http://localhost:3001/products/${productId}`,
          updatedProduct
        );
        setProducts((prevProducts) =>
          prevProducts.map((product) => {
            if (product._id === productId) {
              return { ...product, ...updatedProduct };
            } else {
              return product;
            }
          })
        );
        setEditMode((prevEditMode) => ({
          ...prevEditMode,
          [productId]: false,
        }));
      } catch (error) {
        console.error(error);
      }
    } else {
      alert("Please check the input fields.");
    }
  };

  const handleDelete = async (productId) => {
    try {
      await axios.delete(`http://localhost:3001/products/${productId}`);
      setProducts((prevProducts) =>
        prevProducts.filter((product) => product._id !== productId)
      );
    } catch (error) {
      console.error(error);
    }
  };

  const handleAddProduct = () => {
    setShowAddProduct(true);
  };

  const handleProductSubmit = async (e) => {
    e.preventDefault();
    const row = e.target.closest("tr");
    const newProductData = {
      name: row.querySelector('[contentEditable="true"]').textContent,
      dimensions: row.querySelectorAll('[contentEditable="true"]')[1].textContent,
      wattage: row.querySelectorAll('[contentEditable="true"]')[2].textContent,
      efficiencyPercentage: row.querySelectorAll('[contentEditable="true"]')[3].textContent,
      warranty: row.querySelectorAll('[contentEditable="true"]')[4].textContent,
      weight: row.querySelectorAll('[contentEditable="true"]')[5].textContent,
      price: row.querySelectorAll('[contentEditable="true"]')[6].textContent,
      currentStock: row.querySelectorAll('[contentEditable="true"]')[7].textContent,
      minimunStock: row.querySelectorAll('[contentEditable="true"]')[8].textContent,
      serialNumber: row.querySelectorAll('[contentEditable="true"]')[9].textContent,
      category_id: row.querySelectorAll('[contentEditable="true"]')[10].textContent,
    };
  
    let userInputPassed = validateUserInput(newProductData, e);
  
    if (userInputPassed) {
      try {
        const response = await axios.post("http://localhost:3001/products", newProductData);
        setProducts((prevProducts) => [...prevProducts, response.data]);
        setNewProduct({
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
          category_id: "",
        });
        setShowAddProduct(false);
      } catch (error) {
        console.error(error);
      }
    } else {
      alert("Please check the input fields.");
    }
  };
  
  return (
    <section className="dashboard-content">
      <div className="stock-content">
  <div className="panel">
    <h3>Total Battery Stock</h3>
    <p className="placeholder">{totalBatteryStock}</p>
  </div>
  <div className="panel">
    <h3>Total Panel Stock</h3>
    <p className="placeholder">{totalPanelStock}</p>
  </div>
  <div className="panel">
    <h3>Total Stock Value</h3>
    <p className="placeholder">{totalStockValue}</p>
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
              {currentItems.map((product) => (
                <tr key={product._id}>
                  <td contentEditable={editMode[product._id]}>
                    {product.name}
                  </td>
                  <td contentEditable={editMode[product._id]}>
                    {product.dimensions}
                  </td>
                  <td contentEditable={editMode[product._id]}>
                    {product.wattage}
                  </td>
                  <td contentEditable={editMode[product._id]}>
                    {product.efficiencyPercentage}
                  </td>
                  <td contentEditable={editMode[product._id]}>
                    {product.warranty}
                  </td>
                  <td contentEditable={editMode[product._id]}>
                    {product.weight}
                  </td>
                  <td contentEditable={editMode[product._id]}>
                    {formatCurrency(product.price)}
                  </td>
                  <td contentEditable={editMode[product._id]}>
                    {product.currentStock}
                  </td>
                  <td contentEditable={editMode[product._id]}>
                    {product.minimunStock}
                  </td>
                  <td contentEditable={editMode[product._id]}>
                    {product.serialNumber}
                  </td>
                  <td contentEditable={editMode[product._id]}>
                    {product.category_id}
                  </td>
                  <td>{formatCurrency(product.price * product.currentStock)}</td>
                  <td>
                    {/* Edit and Delete buttons */}
                    {editMode[product._id] ? (
                      <>
                        <button
                          onClick={(e) =>
                            handleSave(
                              product._id,
                              {
                                name: e.target.closest("tr").querySelector(
                                  '[contentEditable="true"]'
                                ).textContent,
                                dimensions: e.target.closest("tr").querySelectorAll(
                                  '[contentEditable="true"]'
                                )[1].textContent,
                                wattage: e.target.closest("tr").querySelectorAll(
                                  '[contentEditable="true"]'
                                )[2].textContent,
                                efficiencyPercentage: e.target.closest(
                                  "tr"
                                ).querySelectorAll('[contentEditable="true"]')[3]
                                  .textContent,
                                warranty: e.target.closest("tr").querySelectorAll(
                                  '[contentEditable="true"]'
                                )[4].textContent,
                                weight: e.target.closest("tr").querySelectorAll(
                                  '[contentEditable="true"]'
                                )[5].textContent,
                                price: e.target.closest("tr").querySelectorAll(
                                  '[contentEditable="true"]'
                                )[6].textContent,
                                currentStock: e.target.closest("tr").querySelectorAll(
                                  '[contentEditable="true"]'
                                )[7].textContent,
                                minimunStock: e.target.closest("tr").querySelectorAll(
                                  '[contentEditable="true"]'
                                )[8].textContent,
                                serialNumber: e.target.closest("tr").querySelectorAll(
                                  '[contentEditable="true"]'
                                )[9].textContent,
                                category_id: e.target.closest("tr").querySelectorAll(
                                  '[contentEditable="true"]'
                                )[10].textContent,
                              },
                              e
                            )
                          }
                        >
                          <i className="fa fa-save"></i> Save
                        </button>

                        <button
                          onClick={() =>
                            setEditMode({
                              ...editMode,
                              [product._id]: false,
                            })
                          }
                        >
                          <i className="fa fa-times"></i> Cancel
                        </button>
                      </>
                    ) : (
                      <>
                        <button onClick={() => handleEdit(product._id)}>
                          <i className="fa fa-edit"></i> Edit
                        </button>
                        <button onClick={() => handleDelete(product._id)}>
                          <i className="fa fa-trash"></i> Delete
                        </button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
              {showAddProduct && (
  <tr>
    <td contentEditable={true}>{newProduct.name}</td>
    <td contentEditable={true}>{newProduct.dimensions}</td>
    <td contentEditable={true}>{newProduct.wattage}</td>
    <td contentEditable={true}>{newProduct.efficiencyPercentage}</td>
    <td contentEditable={true}>{newProduct.warranty}</td>
    <td contentEditable={true}>{newProduct.weight}</td>
    <td contentEditable={true}>{newProduct.price}</td>
    <td contentEditable={true}>{newProduct.currentStock}</td>
    <td contentEditable={true}>{newProduct.minimunStock}</td>
    <td contentEditable={true}>{newProduct.serialNumber}</td>
    <td contentEditable={true}>{newProduct.category_id}</td>
    <td>-</td>
    <td>
      <button onClick={handleProductSubmit}>
        <i className="fa fa-save"></i> Save
      </button>
      <button onClick={() => setShowAddProduct(false)}>
        <i className="fa fa-times"></i> Cancel
      </button>
    </td>
  </tr>
)}
</tbody>
</table>
<div className="pagination">
  <div className="pagination-button">
    <button
      disabled={currentPage === 1}
      onClick={() => setCurrentPage(currentPage - 1)}
    >
      Previous
    </button>
  </div>
  <div className="pagination-button">
    <button
      disabled={indexOfLastItem >= products.length}
      onClick={() => setCurrentPage(currentPage + 1)}
    >
      Next
    </button>
  </div>
</div>
{!showAddProduct && (
  <div className="add-product-button">
    <button onClick={handleAddProduct}>
      <i className="fa fa-plus"></i> Add Product
    </button>
  </div>
)}
</div>
</div>
</section>
);
};


export default Inventory;
