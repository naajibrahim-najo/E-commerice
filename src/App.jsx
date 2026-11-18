import React from 'react'
import Header from './components/Header.jsx'
import{ BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <Router>
      <Header />
      <main>
        <div className="bg-blue-600 text-white p-10 text-center">
          <h1 className="text-4xl font-bold">
            Hello Tailwind ayaan wadaa!
          </h1>
        </div>
      </main>
    </Router>
  )
}

export default App
