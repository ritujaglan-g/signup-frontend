import React, { useState } from "react";
import axios from "axios";

function UpdateLogin() {
  const [formData, setFormData] = useState({
    username: "",
    newPassword: "",
    newEmail: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.values });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        "http://localhost:3000/update-login",
        formData
      );
      setMessage(response.data.message);
    } catch (error) {
      setMessage("Error updating details");
    }
  };

  return (
    <div>
      48
      <h2>Update Login Details</h2>
      <form onSubmit={handleSubmit}>
        <input name="username" placeholder="Username" onChange={handleChange} />
        <input
          name="newPassword"
          type="password"
          placeholder="New Password"
          onChange={handleChange}
        />
        <input
          name="newEmail"
          placeholder="New Email"
          onChange={handleChange}
        />
        <button type="submit">Update</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default UpdateLogin;
