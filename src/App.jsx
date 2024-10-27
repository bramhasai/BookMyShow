import React, { useEffect } from 'react';
import { useState } from 'react';
import logo from './assets/logo.png'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
import { Route,Routes } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import MovieDetails from './components/MovieDetails';
import SeatSelection from './components/SeatSelection';
import Success from './components/Success';
function App() {
  const navigate = useNavigate();
  const [user,setUser]=useState('');

  useEffect(()=>{
    const userEmail=localStorage.getItem('userEmail');
    if(userEmail){
      setUser(userEmail);
    }
  },[user])

  const handleLogout=()=>{
    localStorage.removeItem('userEmail');
    setUser(null);
    navigate('/login');
  }

  return (
    <div>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand style={{cursor:"pointer"}} onClick={()=>navigate('/')}>
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            <h4><i>BookMyShow</i></h4>
          </Navbar.Brand>
          {user && <Button onClick={handleLogout} className='logout-button'>Logout</Button>}
        </Container>
      </Navbar>
    
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login setUser={setUser}/>} />
        <Route path='/signup' element={<Signup setUser={setUser}/>} />
        <Route path='/movieDetails/:id' element={<MovieDetails />} />
        <Route path='/:id/selectseat' element={<SeatSelection />}/>
        <Route path='/success' element={<Success />}/>
      </Routes>
    </div>
  )
}

export default App
