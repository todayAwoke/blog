import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css'; // Import the CSS file
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const handleLogin = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/login', {
            email: email,
            password: password
        })
            //.then(res=>console.log(res))
            .then(res => {
                // if (res.data === "Success") {
                        navigate('/')
                    //}
                })
               .catch(err => console.error(err))   
  }
    return (
    <div className='login-container'>
      <div>
        <h2 className='login-title'>Login</h2>
        <form onSubmit={handleLogin}>
          <div className='login-form'>
            <label htmlFor='email' className='login-label'>
              Email:
            </label>
            <input type='email' id='email' value={email} onChange={e=>setEmail(e.target.value)} className='login-input' />
          </div>
          <div className='login-form'>
            <label htmlFor='password'  className='login-label'>
              Password:
            </label>
                        <input type='password' id='password'
                            value={password}
                            onChange={e=>setPassword(e.target.value)}
                            className='login-input' />
          </div>
          <button type='submit' className='login-button'>Login</button>
        </form>
        <br />
        <p className='login-register'>
          Don't have an account? <Link to='/registration'>Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;