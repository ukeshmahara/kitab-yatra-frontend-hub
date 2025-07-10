
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HomePage from '../components/HomePage';
import LoginPage from '../components/LoginPage';
import RegisterPage from '../components/RegisterPage';
import Dashboard from '../components/Dashboard';
import AboutPage from '../components/AboutPage';

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  // Check if user is already logged in on component mount
  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      setUser(userData);
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = (userData) => {
    // Get registered user data from localStorage
    const registeredUser = localStorage.getItem('registeredUser');
    if (registeredUser) {
      const fullUserData = JSON.parse(registeredUser);
      // Merge login data with registered data
      const completeUserData = {
        ...fullUserData,
        ...userData
      };
      setUser(completeUserData);
      localStorage.setItem('loggedInUser', JSON.stringify(completeUserData));
    } else {
      // Fallback if no registration data found
      setUser(userData);
      localStorage.setItem('loggedInUser', JSON.stringify(userData));
    }
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser(null);
    localStorage.removeItem('loggedInUser');
  };

  const handleRegister = (userData) => {
    // Store registration data
    localStorage.setItem('registeredUser', JSON.stringify(userData));
  };

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50">
        <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} user={user} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
          <Route path="/register" element={<RegisterPage onRegister={handleRegister} />} />
          <Route 
            path="/dashboard" 
            element={
              isLoggedIn ? (
                <Dashboard user={user} onLogout={handleLogout} />
              ) : (
                <LoginPage onLogin={handleLogin} />
              )
            } 
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default Index;
