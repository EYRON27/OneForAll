import React from 'react';
import Header from '../components/layout/Header';
import Hero from '../components/sections/Hero';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <Hero />
    </div>
  );
};

export default LandingPage;