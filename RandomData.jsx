import { useState, useEffect } from "react";
import axios from "axios";

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:5000/getUsers") // Backend API
      .then(response => {
        setUsers(response.data); // Store data in state
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching users:", error);
        setError("Failed to load users. Please try again.");
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Users List</h2>

      {/* Loading Indicator */}
      {loading && <p className="text-blue-600">Loading users...</p>}

      {/* Error Message */}
      {error && <p className="text-red-500">{error}</p>}

      {/* Users List */}
      <ul className="w-full max-w-md bg-white shadow-md rounded-lg p-4">
        {users.length > 0 ? (
          users.map(user => (
            <li key={user._id} className="border-b last:border-b-0 p-3 flex justify-between">
              <span className="font-semibold">{user.name}</span>
              <span className="text-gray-600">Age: {user.age}</span>
            </li>
          ))
        ) : (
          !loading && <p className="text-gray-500">No users found.</p>
        )}
      </ul>
    </div>
  );
};

export default UsersList;
