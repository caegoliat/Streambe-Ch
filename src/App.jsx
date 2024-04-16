import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importa Routes
import { useAuthStore } from './store/authStore';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

const App = () => {
  const { isAuthenticated } = useAuthStore();

  return (
    <Router>
      <Routes> 
        <Route path="/" element={!isAuthenticated ? <Login /> : <Dashboard />} />
      </Routes>
    </Router>
  );
};

export default App;