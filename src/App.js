import React from 'react'
import { Route, BrowserRouter, Routes } from 'react-router-dom' 
import LandingPage from './components/LandingPage'
import UserDetails from './components/UsersPage';
import './App.css'
import Comingsoon from './components/Comingsoon';

export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
       <Route exact path="/" element={<LandingPage />} />
      <Route path="/user/:userId" element={<UserDetails />} />
      <Route path="/comingsoon" element={<Comingsoon />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}
