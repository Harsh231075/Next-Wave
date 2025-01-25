import React from 'react';
import { Navigate, Route, Routes } from "react-router-dom";
import Home from './components/Home';
import Awereness from './components/Awereness';
import Chellenges from './components/Chellenges';
import { Dashboard } from './dashboard/Dashboard';
import Login from './Auth/Login'
import Signup from './Auth/Signup'
import CommunityPage from './pages/Community';
import Impact from './components/Impact';
export default function App() {
  return (
    <>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/' element={<Home />} />
        <Route path='/awereness' element={<Awereness />} />
        <Route path='/challenges' element={<Chellenges />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/community' element={<CommunityPage />} />
        <Route path='/impact' element={<Impact />} />
      </Routes>
    </>
  )
}