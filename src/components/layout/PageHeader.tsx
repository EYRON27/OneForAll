import React from 'react';

interface PageHeaderProps {
  userName?: string;
  pageTitle: string;
  onLogout: () => void;
}

const PageHeader: React.FC<PageHeaderProps> = ({ userName = 'User', pageTitle, onLogout }) => {
  return (
    <header className="bg-[#e6d5c0] px-4 sm:px-6 md:px-8 py-3 md:py-4 flex items-center justify-between">
      <h1 className="text-gray-600 text-sm sm:text-base md:text-lg">Welcome, {userName}!</h1>
      <div className="flex items-center gap-2 sm:gap-4">
        <span className="text-[#ff7a2d] font-bold text-base sm:text-lg md:text-xl">{pageTitle}</span>
        <button 
          onClick={onLogout}
          className="bg-black text-white px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 rounded-lg text-sm sm:text-base hover:bg-gray-800 transition-colors"
        >
          Logout
        </button>
      </div>
    </header>
  );
};

export default PageHeader;
