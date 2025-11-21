import React from 'react';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/loginpage';
import SignupPage from './pages/SignupPage';

function App() {
  const path = window.location.pathname;
  if (path === '/login') return <LoginPage />;
  if (path === '/signup') return <SignupPage />;
  return <LandingPage />;
}

export default App;