import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getCurrentUser } from '../../utils/auth';

const Sidebar: React.FC = () => {
  const location = useLocation();
  const user = getCurrentUser();
  
  const menuItems = [
    { path: '/dashboard', label: 'Home', icon: '🏠' },
    { path: '/dashboard/overview', label: 'Dashboard', icon: '📊' },
    { path: '/dashboard/tasks', label: 'Tasks', icon: '✅' },
    { path: '/dashboard/pass', label: 'Pass', icon: '🔐' },
    { path: '/dashboard/money', label: 'Money', icon: '💰' },
  ];
  
  return (
    <div className="w-64 bg-gradient-to-b from-gray-900 to-gray-800 text-white min-h-screen p-6 flex flex-col">
      {/* Logo */}
      <div className="mb-10">
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <span className="bg-blue-500 p-2 rounded-lg">TP</span>
          <span>TASK PASS</span>
        </h1>
      </div>
      
      {/* User Profile */}
      {user && (
        <div className="flex items-center gap-3 mb-8 p-3 bg-gray-800 rounded-lg">
          <img src={user.avatar} alt={user.name} className="w-10 h-10 rounded-full" />
          <div>
            <p className="font-medium">{user.name}</p>
            <p className="text-xs text-gray-400">{user.email}</p>
          </div>
        </div>
      )}
      
      {/* Navigation Menu */}
      <nav className="flex-1">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`flex items-center gap-3 p-3 rounded-lg transition-colors ${
                  location.pathname === item.path
                    ? 'bg-blue-600 text-white'
                    : 'hover:bg-gray-700'
                }`}
              >
                <span className="text-xl">{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      
      {/* Settings */}
      <div className="mt-auto pt-6 border-t border-gray-700">
        <Link
          to="/dashboard/settings"
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-700 transition-colors"
        >
          <span className="text-xl">⚙️</span>
          <span>Settings</span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;