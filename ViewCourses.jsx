import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ViewCourses() {
  const [courses, setCourses] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      axios.get('http://localhost:3000/purchased-courses', {
        params: { username: user.username, password: user.password },
      })
      .then(response => setCourses(response.data.purchasedCourses))
      .catch(error => setMessage('Error fetching courses'));
    }
  }, []);

  return (
    <div>
      <h2>Purchased Courses</h2>
      {courses.length > 0 ? (
        <ul>
          {courses.map(course => (
            <li key={course.courseId}>
              {course.courseName} - {course.completed ? 'Completed' : 'Not Completed'}
            </li>
          ))}
        </ul>
      ) : (
        <p>{message || 'No courses purchased'}</p>
      )}
    </div>
  );
}

export default ViewCourses;
