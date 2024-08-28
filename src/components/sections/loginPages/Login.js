import HeroImage from "../../../assets/food/food4.webp";
import React, { useState } from 'react';
export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle form submission, such as sending the data to your backend for authentication
    console.log('Email:', email);
    console.log('Password:', password);
    // Reset form fields after submission
    setEmail('');
    setPassword('');
  };
  return (
    <header className="reserve-table">
      <img
        className="header-reserve"
        src={HeroImage}
        alt="Little Lemon Ingredients"
      ></img>
      <div className="reserve-header-text">
        <h1>Login</h1>
      </div>
      <div className="login-form-container" >
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group" >
          <label htmlFor="email" style={{ color: 'black' }} >Email:</label>
          <br/>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password" style={{ color: 'black' }}>Password:</label>
          <br/>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button type="submit" >Login</button>
      </form>
      <br></br>
    </div>
    </header>
  );
}
