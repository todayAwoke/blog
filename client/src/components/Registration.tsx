import React, { useEffect, useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import './Registration.css'; // Import the CSS file
import axios from 'axios'; 

const Registration = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    //const [register, setRegister] = useState('Register');
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/register',
            { username, password, email })
            .then(res => navigate('/login'))
            .catch(err => console.error(err))
    }
    //   useEffect(() => {
    //     setRegister("Loading...")
    // },[handleSubmit])
  return (
    <div className='registration-container'>
      <div>
        <h2 className='registration-title'>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className='registration-form'>
            <label htmlFor='name' className='registration-label'>
              UserName:
            </label>
                      <input type='text'  id='name'
                          value={username}
                          onChange={e=>setUsername(e.target.value)}
                          className='registration-input' />
          </div>
          <div className='registration-form'>
            <label htmlFor='email' className='registration-label'>
              Email:
            </label>
                      <input type='email' id='email'
                          value={email}
                          onChange={e=>setEmail(e.target.value)}
                          className='registration-input' />
          </div>
          <div className='registration-form'>
            <label htmlFor='password' className='registration-label'>
              Password:
            </label>
                      <input type='password' id='password'
                          value={password}
                          onChange={e=>setPassword(e.target.value)}
                          className='registration-input' />
          </div>
                  <button className='registration-button'>Sign Up</button>
        </form>
        <br />
        <p className='registration-login'>
          Already have an account? <Link to='/login'>Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Registration;