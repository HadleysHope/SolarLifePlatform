import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const EditUser = () => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
    });

const { userId} = useParams ();
const navigate = useNavigate ();

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

    fetchUser ();
    }, [userId]);

    const handleUserChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value});
    };

    const handleUserSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(
                `http://localhost:3001/users/${userId}`,
                user
            );
            navigate("/users");
        } catch (error) {
            console.error(error);
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
                        value={user.name}
                        onChange={handleUserChange}
                    />
                </div>
                <div>
                    <label htmlfor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={user.email}
                        onChange={handleUserChange}
                    />
                    <label htmlFor="password">Password</label>
                    <input
                        type="text"
                        id="password"
                        value={user.password}
                        onChange={handleUserChange}
                    />
                </div>
                <button type="submit">Save</button>
            </form>
        </div>
        );
    };

export default EditUser;
