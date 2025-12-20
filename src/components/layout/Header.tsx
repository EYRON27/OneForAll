import React from 'react';

interface HeaderProps {
  onLoginClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onLoginClick }) => {
  return (
    <header className="absolute top-4 md:top-6 left-0 right-0 z-50">
      <div className="relative px-4 md:px-0">
        {/* Logo flush left */}
        <div className="absolute left-4 md:left-6 top-3 flex items-center">
          <div className="h-8 flex items-center">
            <div className="flex items-center text-[16px] md:text-[18px] font-extrabold tracking-tight leading-none" style={{ fontFamily: 'Montserrat, system-ui, -apple-system, sans-serif' }}>
              <span className="text-[#ff7a2d]">T</span>
              <span className="text-white -ml-0.5">P</span>
            </div>
          </div>
        </div>

        {/* Login flush right */}
        <div className="absolute right-4 md:right-6 top-2 flex items-center">
          <button 
            onClick={onLoginClick}
            className="text-xs sm:text-sm px-3 sm:px-4 py-1 rounded-md bg-[#ffedd5] text-[#ff7a2d] hover:bg-[#ff7a2d] hover:text-white transition-colors"
          >
            Login
          </button>
        </div>

        {/* Centered nav */}
        <div className="max-w-6xl mx-auto px-6">
          <nav className="hidden md:flex justify-center gap-8 text-sm text-white/80">
            <a href="#" className="hover:text-white">About</a>
            <a href="#" className="hover:text-white">Features</a>
            <a href="#" className="hover:text-white">Contacts</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;