import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Registration from './components/Registration'
import Login from './components/Login';
import Create from './components/Create';

import { createContext, useEffect } from 'react'
import axios from 'axios'
//export const userContext = createContext();
function App() {
    // const [user, setUser] = useEffect({});
    // axios.defaults.withCredentials = true;
    // useEffect(() => {
    //     axios.get('http://localhost:3001/')
    //         .then(user => {
    //             setUser(user.data);
    //         })
    //         .catch(err => console.log(err))
    // }, [])

    return (
        // <userContext.Provider value={user}>
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/registration' element={<Registration />} />
                <Route path='/login' element={<Login />} />
                <Route path='/create' element={<Create />} />
            </Routes>
        </BrowserRouter>
        // </userContext.Provider>
    )
}

export default App
