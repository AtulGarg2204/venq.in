import React, { useState } from 'react';
import axios from 'axios';
import "./Userdummy.css"
const Userdummy = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formData;

    try {
      const response = await axios.get('api', {
        params: {
          email,
          password
        }
      });

      if (response.data.success) {
        
        window.location.href = 'https://venq.in/';
      } else {
       
        alert('Invalid credentials. Please try again.');
      }
    } catch (error) {
      console.error('Error during login:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <div className='userdummy_login_main'>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className='userdummy_login_container_one'>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className='userdummy_login_container_two'>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>
        <button className='userdummy_login_button' type="submit">Login</button>
      </form>
    </div>
  );
};

export default Userdummy;



