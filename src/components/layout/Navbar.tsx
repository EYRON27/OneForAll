import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center">
        <div className="flex items-center text-[20px] font-extrabold tracking-tight leading-none" style={{ fontFamily: 'Montserrat, system-ui, -apple-system, sans-serif' }}>
          <span className="text-[#ff7a2d]">T</span>
          <span className="text-white -ml-0.5">P</span>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex space-x-8">
        <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">About</a>
        <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Features</a>
        <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Contacts</a>
        <a href="/login" className="text-gray-700 hover:text-blue-600 transition-colors">Login</a>
      </div>

      {/* Mobile menu button */}
      <div className="md:hidden">
        <button className="text-gray-700">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;