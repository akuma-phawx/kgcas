import './login.module.styles.scss';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Button from '../../components/button/button.component';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
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
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <h2>Welcome Back</h2>
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
        <p>
          No account?{' '}
          <span>
            <Link to="/register">Click here to sign up</Link>
          </span>
        </p>
        <Button
          displayText={'Login'}
          givenClass={'login-button'}
          givenType={'submit'}
        />
      </form>
    </div>
  );
};
export default Login;
