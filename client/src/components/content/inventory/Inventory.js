import React from "react";
import "./Inventory.css";

const Inventory = () => {
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

      <div className="stock-table">
        <h4 className="category-title">Solar Panels</h4>
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Total Value</th>
              <th>Sold</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Product 1</td>
              <td>10</td>
              <td>$100</td>
              <td>$1,000</td>
              <td>Yes</td>
              <td>Action 1</td>
            </tr>
            <tr>
              <td>Product 2</td>
              <td>5</td>
              <td>$200</td>
              <td>$1,000</td>
              <td>No</td>
              <td>Action 2</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="stock-table">
        <h4 className="category-title">Batteries</h4>
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Total Value</th>
              <th>Sold</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Product 3</td>
              <td>8</td>
              <td>$150</td>
              <td>$1,200</td>
              <td>Yes</td>
              <td>Action 3</td>
            </tr>
            <tr>
              <td>Product 4</td>
              <td>3</td>
              <td>$300</td>
              <td>$900</td>
              <td>No</td>
              <td>Action 4</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Inventory;
