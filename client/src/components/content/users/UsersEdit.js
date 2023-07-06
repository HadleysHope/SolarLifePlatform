import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { validateUserInput } from "./validateUserInput";

const EditUser = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    type: "",
  });

  const [selectedOption, setSelectedOption] = useState("Employee"); // State to store the selected option

  const { userId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/users/${userId}`
        );
        setUser(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUser();
  }, [userId]);

  const handleUserChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleUserSubmit = async (e) => {
    e.preventDefault();

    let userInputPassed = validateUserInput(user, e);

    if (userInputPassed) {
      user.type = selectedOption;
      try {
        const response = await axios.put(
          `http://localhost:3001/users/${userId}`,
          user
        );
        navigate("/users");
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div className="edit-user">
      <h2>Edit User</h2>
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
          <label htmlfor="email">Email:</label>
          <input
            type="text"
            id="email"
            name="email"
            value={user.email}
            onChange={handleUserChange}
          />
          <label htmlFor="password">Password</label>
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
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default EditUser;
