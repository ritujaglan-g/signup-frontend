import React, { useState } from 'react';
import axios from 'axios';

function PurchaseCourse() {
  const [formData, setFormData] = useState({ username: '', password: '', courseId: '' });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/purchase-course', formData);
      setMessage(response.data.message);
    } catch (error) {
      setMessage('Error purchasing course');
    }
  };

  return (
    <div>
      <h2>Purchase Course</h2>
      <form onSubmit={handleSubmit}>
        <input name="username" placeholder="Username" onChange={handleChange} />
        <input name="password" type="password" placeholder="Password" onChange={handleChange} />
        <input name="courseId" placeholder="Course ID" onChange={handleChange} />
        <button type="submit">Purchase</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default PurchaseCourse;
