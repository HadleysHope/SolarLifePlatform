import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { validateUserInput } from "./validateUserInput";

const AddUser = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    type: "",
  });
  const [selectedOption, setSelectedOption] = useState("Employee"); // State to store the selected option

  const navigate = useNavigate();

  const handleUserChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(e);
  };

  const handleUserSubmit = async (e) => {
    e.preventDefault();

    let userInputPassed = validateUserInput(user, e);
    if (userInputPassed) {
      user.type = selectedOption;
      try {
        await axios.post("http://localhost:3001/users", user);
        navigate("/users");
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div className="add-user">
      <h2>Add New User</h2>
      <form onSubmit={handleUserSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={user.name}
            onChange={handleUserChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            name="email"
            value={user.email}
            onChange={handleUserChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="text"
            id="password"
            name="password"
            value={user.password}
            onChange={handleUserChange}
          />
        </div>
        <div>
          <label htmlFor="role">Role:</label>
          <select
            id="role"
            name="role"
            onChange={(e) => {
              const opt = e.target.value;
              setSelectedOption(opt);
            }}
          >
            <option value="Employee">Employee</option>
            <option value="Administrator">Administrator</option>
          </select>
        </div>
        <div style={{ padding: 2 }}>
          <button type="submit">Add User</button>
        </div>
      </form>
    </div>
  );
};

export default AddUser;
