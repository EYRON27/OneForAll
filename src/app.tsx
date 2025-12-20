import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import DashboardPage from './pages/DashboardPage';
import TaskPage from './pages/TaskPage';
import PassPage from './pages/PassPage';
import MoneyPage from './pages/MoneyPage';

// Check if user is authenticated
const isAuthenticated = () => {
  return !!localStorage.getItem('user');
};

// Protected Route Component
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  return isAuthenticated() ? <>{children}</> : <Navigate to="/" replace />;
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route 
          path="/dashboard" 
          element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/tasks" 
          element={
            <ProtectedRoute>
              <TaskPage />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/pass" 
          element={
            <ProtectedRoute>
              <PassPage />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/money" 
          element={
            <ProtectedRoute>
              <MoneyPage />
            </ProtectedRoute>
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;