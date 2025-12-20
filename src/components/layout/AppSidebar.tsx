import React, { useState, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const AppSidebar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isExpanded, setIsExpanded] = useState(false);
  const leaveTimeoutRef = useRef<number | null>(null);

  const isActive = (path: string) => location.pathname === path;

  const handleMouseEnter = () => {
    if (leaveTimeoutRef.current) {
      clearTimeout(leaveTimeoutRef.current);
      leaveTimeoutRef.current = null;
    }
    setIsExpanded(true);
  };

  const handleMouseLeave = () => {
    leaveTimeoutRef.current = setTimeout(() => {
      setIsExpanded(false);
    }, 500);
  };

  const handleNavClick = (path: string) => {
    if (leaveTimeoutRef.current) {
      clearTimeout(leaveTimeoutRef.current);
      leaveTimeoutRef.current = null;
    }
    navigate(path);
  };

  return (
    <aside 
      className={`${isExpanded ? 'w-64' : 'w-16'} bg-[#2b3544] transition-all duration-300 ease-in-out flex-col py-6 relative overflow-x-hidden h-screen sticky top-0 hidden md:flex`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Logo */}
      <div className="px-4 mb-8 flex-shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#4a5568] rounded flex items-center justify-center flex-shrink-0">
            <span className="text-[#ff7a2d] font-bold text-sm">T</span>
            <span className="text-white font-bold text-sm">P</span>
          </div>
          <div className={`${isExpanded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300 whitespace-nowrap`}>
            <span className="text-[#ff7a2d] font-bold text-xl">TASK</span>
            <span className="text-white font-bold text-xl">PASS</span>
          </div>
        </div>
      </div>
      
      {/* Navigation Items */}
      <nav className="flex-1 flex flex-col gap-2 px-3 overflow-y-auto flex-shrink min-h-0 scrollbar-hide">
        <button 
          onClick={() => handleNavClick('/dashboard')}
          className={`flex items-center gap-4 px-3 py-3 text-[#ff7a2d] rounded-lg transition-colors flex-shrink-0 ${
            isActive('/dashboard') ? 'bg-[#374151]' : 'hover:bg-[#374151]'
          }`}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="flex-shrink-0">
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
          </svg>
          <span className={`${isExpanded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300 whitespace-nowrap text-white font-medium`}>Home</span>
        </button>
        
        <button 
          onClick={() => handleNavClick('/dashboard')}
          className={`flex items-center gap-4 px-3 py-3 text-[#ff7a2d] rounded-lg transition-colors ${
            isActive('/dashboard') ? 'bg-[#374151]' : 'hover:bg-[#374151]'
          }`}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="flex-shrink-0">
            <path d="M4 4h6v6H4V4zm10 0h6v6h-6V4zM4 14h6v6H4v-6zm10 0h6v6h-6v-6z"/>
          </svg>
          <span className={`${isExpanded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300 whitespace-nowrap text-white font-medium`}>Dashboard</span>
        </button>
        
        <button 
          onClick={() => handleNavClick('/tasks')}
          className={`flex items-center gap-4 px-3 py-3 text-[#ff7a2d] rounded-lg transition-colors ${
            isActive('/tasks') ? 'bg-[#374151]' : 'hover:bg-[#374151]'
          }`}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="flex-shrink-0">
            <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"/>
          </svg>
          <span className={`${isExpanded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300 whitespace-nowrap text-white font-medium`}>Tasks</span>
        </button>
        
        <button 
          onClick={() => handleNavClick('/pass')}
          className={`flex items-center gap-4 px-3 py-3 text-[#ff7a2d] rounded-lg transition-colors ${
            isActive('/pass') ? 'bg-[#374151]' : 'hover:bg-[#374151]'
          }`}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="flex-shrink-0">
            <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>
          </svg>
          <span className={`${isExpanded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300 whitespace-nowrap text-white font-medium`}>Pass</span>
        </button>
        
        <button 
          onClick={() => handleNavClick('/money')}
          className={`flex items-center gap-4 px-3 py-3 text-[#ff7a2d] rounded-lg transition-colors ${
            isActive('/money') ? 'bg-[#374151]' : 'hover:bg-[#374151]'
          }`}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="flex-shrink-0">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-2.84 3.11-3.21V4h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H14.3c-.05-1.11-.64-1.87-2.22-1.87-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.39 2.67 1.91s4.18 1.39 4.18 3.91c-.01 1.83-1.38 2.83-3.12 3.16z"/>
          </svg>
          <span className={`${isExpanded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300 whitespace-nowrap text-white font-medium`}>Money</span>
        </button>
      </nav>
      
      {/* Settings - At bottom */}
      <div className="px-3 mt-auto flex-shrink-0">
        <button className="flex items-center gap-4 px-3 py-3 text-[#ff7a2d] hover:bg-[#374151] rounded-lg transition-colors w-full flex-shrink-0">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="flex-shrink-0">
            <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/>
          </svg>
          <span className={`${isExpanded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300 whitespace-nowrap text-white font-medium`}>Settings</span>
        </button>
      </div>
    </aside>
  );
};

export default AppSidebar;
