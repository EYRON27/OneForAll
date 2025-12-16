import React from 'react';
import { useNavigate } from 'react-router-dom';

const DashboardPage: React.FC = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user') || '{}');

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-[#ff7a2d] text-white rounded-lg hover:bg-[#e56a1d] transition-colors"
          >
            Logout
          </button>
        </div>
        
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex items-center gap-4 mb-6">
            {user.avatar && (
              <img src={user.avatar} alt={user.name} className="w-16 h-16 rounded-full" />
            )}
            <div>
              <h2 className="text-2xl font-semibold text-gray-800">Welcome back, {user.name}!</h2>
              <p className="text-gray-600">{user.email}</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-xl">
              <h3 className="text-lg font-semibold mb-2">Tasks</h3>
              <p className="text-3xl font-bold">24</p>
            </div>
            <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-6 rounded-xl">
              <h3 className="text-lg font-semibold mb-2">Completed</h3>
              <p className="text-3xl font-bold">18</p>
            </div>
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-6 rounded-xl">
              <h3 className="text-lg font-semibold mb-2">Passwords</h3>
              <p className="text-3xl font-bold">42</p>
            </div>
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white p-6 rounded-xl">
              <h3 className="text-lg font-semibold mb-2">Projects</h3>
              <p className="text-3xl font-bold">7</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;