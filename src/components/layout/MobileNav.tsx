import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

interface MobileNavProps {
  onLogout: () => void;
}

const MobileNav: React.FC<MobileNavProps> = ({ onLogout }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const handleNavClick = (path: string) => {
    navigate(path);
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile Header */}
      <div className="md:hidden bg-[#2b3544] px-4 py-3 flex items-center justify-between sticky top-0 z-40">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#4a5568] rounded flex items-center justify-center">
            <span className="text-[#ff7a2d] font-bold text-xs">T</span>
            <span className="text-white font-bold text-xs">P</span>
          </div>
          <div>
            <span className="text-[#ff7a2d] font-bold text-sm">TASK</span>
            <span className="text-white font-bold text-sm">PASS</span>
          </div>
        </div>

        {/* Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white p-2"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Drawer */}
      <div 
        className={`fixed top-0 left-0 h-full w-64 bg-[#2b3544] z-50 transform transition-transform duration-300 md:hidden ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Logo in Drawer */}
          <div className="px-4 py-6 border-b border-gray-700">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#4a5568] rounded flex items-center justify-center">
                <span className="text-[#ff7a2d] font-bold text-sm">T</span>
                <span className="text-white font-bold text-sm">P</span>
              </div>
              <div>
                <span className="text-[#ff7a2d] font-bold text-xl">TASK</span>
                <span className="text-white font-bold text-xl">PASS</span>
              </div>
            </div>
          </div>

          {/* Navigation Items */}
          <nav className="flex-1 px-3 py-4 space-y-2 overflow-y-auto">
            <button 
              onClick={() => handleNavClick('/dashboard')}
              className={`flex items-center gap-4 px-3 py-3 text-white rounded-lg transition-colors w-full ${
                isActive('/dashboard') ? 'bg-[#374151]' : 'hover:bg-[#374151]'
              }`}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="#ff7a2d">
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
              </svg>
              <span className="font-medium">Home</span>
            </button>
            
            <button 
              onClick={() => handleNavClick('/dashboard')}
              className={`flex items-center gap-4 px-3 py-3 text-white rounded-lg transition-colors w-full ${
                isActive('/dashboard') ? 'bg-[#374151]' : 'hover:bg-[#374151]'
              }`}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="#ff7a2d">
                <path d="M4 4h6v6H4V4zm10 0h6v6h-6V4zM4 14h6v6H4v-6zm10 0h6v6h-6v-6z"/>
              </svg>
              <span className="font-medium">Dashboard</span>
            </button>
            
            <button 
              onClick={() => handleNavClick('/tasks')}
              className={`flex items-center gap-4 px-3 py-3 text-white rounded-lg transition-colors w-full ${
                isActive('/tasks') ? 'bg-[#374151]' : 'hover:bg-[#374151]'
              }`}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="#ff7a2d">
                <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"/>
              </svg>
              <span className="font-medium">Tasks</span>
            </button>
            
            <button 
              onClick={() => handleNavClick('/pass')}
              className={`flex items-center gap-4 px-3 py-3 text-white rounded-lg transition-colors w-full ${
                isActive('/pass') ? 'bg-[#374151]' : 'hover:bg-[#374151]'
              }`}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="#ff7a2d">
                <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>
              </svg>
              <span className="font-medium">Pass</span>
            </button>
            
            <button 
              onClick={() => handleNavClick('/money')}
              className={`flex items-center gap-4 px-3 py-3 text-white rounded-lg transition-colors w-full ${
                isActive('/money') ? 'bg-[#374151]' : 'hover:bg-[#374151]'
              }`}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="#ff7a2d">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-2.84 3.11-3.21V4h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H14.3c-.05-1.11-.64-1.87-2.22-1.87-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.39 2.67 1.91s4.18 1.39 4.18 3.91c-.01 1.83-1.38 2.83-3.12 3.16z"/>
              </svg>
              <span className="font-medium">Money</span>
            </button>
          </nav>

          {/* Settings and Logout at bottom */}
          <div className="px-3 py-4 border-t border-gray-700 space-y-2">
            <button className="flex items-center gap-4 px-3 py-3 text-white hover:bg-[#374151] rounded-lg transition-colors w-full">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="#ff7a2d">
                <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/>
              </svg>
              <span className="font-medium">Settings</span>
            </button>
            
            <button 
              onClick={() => {
                setIsOpen(false);
                onLogout();
              }}
              className="flex items-center gap-4 px-3 py-3 text-white bg-red-600 hover:bg-red-700 rounded-lg transition-colors w-full"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z"/>
              </svg>
              <span className="font-medium">Logout</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
