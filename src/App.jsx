import { useState } from 'react';
import logo from './assets/logo.png'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
import { Route,Routes } from 'react-router-dom';

import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import MovieDetails from './components/MovieDetails';
import SeatSelection from './components/SeatSelection';
function App() {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand style={{cursor:"pointer"}} onClick={()=>navigate('/home')}>
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            <h4><i>BookMyShow</i></h4>
          </Navbar.Brand>
        </Container>
      </Navbar>
    
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/movieDetails/:id' element={<MovieDetails />} />
        <Route path='/:id/selectseat' element={<SeatSelection />}/>
      </Routes>
    </div>
  )
}

export default App
