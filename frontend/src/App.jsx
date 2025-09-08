import React, { useState } from 'react';
import { Outlet, NavLink } from "react-router-dom";
import { motion } from "framer-motion";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (details) => {
    setIsLoggedIn(true);
  };

  return (
    <div className="min-h-screen flex flex-col font-inter bg-slate-900 text-white">
      {/* Header */}
      <header className="border-b border-gray-700">
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
          {/* Logo */}
          <h1 className="text-xl font-bold text-emerald-400">
            JobSpy
          </h1>

          {/* Nav Links */}
          <nav className="space-x-6 text-sm font-medium">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `hover:text-emerald-400 transition ${
                  isActive ? "text-emerald-400" : ""
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/upload"
              className={({ isActive }) =>
                `hover:text-emerald-400 transition ${
                  isActive ? "text-emerald-400" : ""
                }`
              }
            >
              Upload Resume
            </NavLink>
            <NavLink
              to="/jds"
              className={({ isActive }) =>
                `hover:text-emerald-400 transition ${
                  isActive ? "text-emerald-400" : ""
                }`
              }
            >
              Job Descriptions
            </NavLink>
            <NavLink
              to="/analytics"
              className={({ isActive }) =>
                `hover:text-emerald-400 transition ${
                  isActive ? "text-emerald-400" : ""
                }`
              }
            >
              Analytics
            </NavLink>
          </nav>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 max-w-6xl mx-auto px-4 py-6">
        {!isLoggedIn ? (
          <div className="w-full h-full flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-slate-800 p-8 rounded-2xl shadow-xl w-11/12 max-w-4xl mb-8"
            >
              <h2 className="text-2xl font-semibold mb-4 text-emerald-400">👋 Welcome to JobSpy!</h2>
              <p className="text-lg mb-6 text-white opacity-80">
                Please provide your details to get started.
              </p>
              <div className="flex flex-col space-y-4">
                <input
                  type="text"
                  placeholder="Your Full Name"
                  value=""
                  onChange={() => {}}
                  className="w-full text-white bg-slate-700 rounded-lg py-3 px-4 transition duration-300 ease-in-out hover:bg-slate-600 focus:outline-none focus:ring focus:ring-emerald-400 focus:ring-opacity-50"
                />
                <input
                  type="email"
                  placeholder="Your Email Address"
                  value=""
                  onChange={() => {}}
                  className="w-full text-white bg-slate-700 rounded-lg py-3 px-4 transition duration-300 ease-in-out hover:bg-slate-600 focus:outline-none focus:ring focus:ring-emerald-400 focus:ring-opacity-50"
                />
                <textarea
                  placeholder="Your skills (e.g., Python, JavaScript, React)"
                  value=""
                  onChange={() => {}}
                  className="w-full text-white bg-slate-700 rounded-lg py-3 px-4 transition duration-300 ease-in-out hover:bg-slate-600 focus:outline-none focus:ring focus:ring-emerald-400 focus:ring-opacity-50 resize-none"
                  rows="3"
                />
                <motion.button
                  onClick={handleLogin}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-emerald-500 text-white font-bold py-3 px-6 rounded-full shadow-lg transition duration-300 ease-in-out hover:bg-emerald-600"
                >
                  Start Job Hunting!
                </motion.button>
              </div>
            </motion.div>
          </div>
        ) : (
          <Outlet />
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-700 py-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} JobSpy
      </footer>
    </div>
  );
}

export default App;
