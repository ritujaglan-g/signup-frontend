import React, { useState } from 'react';
import axios from 'axios';

function CompleteCourse() {
  const [formData, setFormData] = useState({ username: '', password: '', courseId: '' });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put('http://localhost:3000/complete-course', formData);
      setMessage(response.data.message);
    } catch (error) {
      setMessage('Error completing course');
    }
  };

  return (
    <div>
      <h2>Complete Course</h2>
      <form onSubmit={handleSubmit}>
        <input name="username" placeholder="Username" onChange={handleChange} />
        <input name="password" type="password" placeholder="Password" onChange={handleChange} />
        <input name="courseId" placeholder="Course ID" onChange={handleChange} />
        <button type="submit">Complete</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default CompleteCourse;
