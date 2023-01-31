import React, { useState } from 'react';
import './registration.styles.scss';
import Button from '../../components/button/button.component';
const Registration = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  // handler to update the formData state on input change
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  // handler to log the formData when form is submitted
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <div className="registration-form-container">
      <form onSubmit={handleSubmit}>
        <h2>User Registration</h2>
        <div className="input-container">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            autoComplete="off"
            id="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-container">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            autoComplete="off"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-container">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            autoComplete="off"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-container">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            autoComplete="off"
            name="confirmPassword"
            id="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>
        <Button
          displayText={'Sign Up'}
          givenClass={'register-button'}
          givenType={'submit'}
        />
      </form>
    </div>
  );
};
export default Registration;
