import React from 'react';
import { useState } from 'react'
import './index.css'

import { Navigate, Route, Routes } from 'react-router-dom';
import Auth from './pages/auth/Index';
import Chat from './pages/chat/Index';
import Profile from './pages/profile/Index';

function App() {
  

  return (

   <Routes>
    <Route path="/auth" element={<Auth/>}/>
    <Route path="/chat" element={<Chat/>}/>
    <Route path="/profile" element={<Profile/>}/>
    <Route path="*" element={<Navigate to="/auth"/>}/>
   </Routes>
   
  )
}

export default App
