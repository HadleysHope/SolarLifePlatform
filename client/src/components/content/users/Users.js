import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:3001/users");
        console.log(response.data);
        setUsers(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUsers();
  }, []);

  const handleUserEdit = (userId) => {
    navigate(`/edit-user/${userId}`);
  };

  const handleUserDelete = async (userId) => {
    console.log("Delete User:", userId);
    try {
      await axios.delete(`http://localhost:3001/users/${userId}`);
      setUsers(users.filter((user) => user._id !== userId));
    } catch (error) {
      console.error(error);
    }
  };

  if (users.length === 0) {
    return <div>Loading...</div>;
  }

  const handleAddUser = async (userid) => {
    navigate("/add-user");
  };

  return (
    <section className="dashboard-content">
      <div className="users-content">
        <div className="users-list">
          <hr />
          <div className="table">
            <div classname="--flex-between --flex-dir-column">
              <span>
                <h3>List of Users</h3>
              </span>
            </div>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Password</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user._id}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.password}</td>
                    <td>
                      <button onClick={() => handleUserEdit(user._id)}>
                        <i className="fa fa-edit"></i>Edit
                      </button>
                      <button onClick={() => handleUserDelete(user._id)}>
                        <i classname="fa fa-trash"></i>Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button onClick={handleAddUser}>
              <i className="faplus">Add New User</i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Users;
