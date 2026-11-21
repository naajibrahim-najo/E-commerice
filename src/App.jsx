import React from 'react'
import Header from './components/Header.jsx'
import{ BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard.jsx';

function App() {

  return (
    <Router>
      <Header />
      <Dashboard/>
     
    </Router>
  )
}

export default App
