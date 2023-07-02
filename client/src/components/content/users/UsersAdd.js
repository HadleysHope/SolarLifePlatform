import React, { useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: ""
    });

    const navigate = useNavigate();

    const handleUserChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value});
    };

    const handleUserSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:3001/users", user);
            navigate ("/users");
        } catch (error) {
            console.error(error);
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
                <button type="submit">Add User</button>
            </form>
        </div>
    );
};

export default AddUser;
