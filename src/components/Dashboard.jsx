import React, { Component } from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* Sidebar */}
      <aside className="w-64 bg-blue-950 text-white p-5">

        <h1 className="text-2xl font-bold mb-10">
          School Dashboard
        </h1>

        <ul className="space-y-4">

          <li className="bg-blue-800 p-3 rounded-lg cursor-pointer">
            Home
          </li>

          <li className="p-3 hover:bg-blue-800 rounded-lg cursor-pointer">
            School
          </li>

          <li className="p-3 hover:bg-blue-800 rounded-lg cursor-pointer">
            Student
          </li>

          <li className="p-3 hover:bg-blue-800 rounded-lg cursor-pointer">
            Finance
          </li>

          <li className="p-3 hover:bg-blue-800 rounded-lg cursor-pointer">
            Staff
          </li>

          <li className="p-3 hover:bg-blue-800 rounded-lg cursor-pointer">
            Registration
          </li>

        </ul>

      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">

        <h1 className="text-3xl font-bold text-gray-800">
          Home
        </h1>

        <p className="text-gray-500 mt-2">
          Welcome to the school management system.
        </p>

      </main>

    </div>
  );
}

export default Dashboard;