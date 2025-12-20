import React, { useState } from 'react';
import Header from '../components/layout/Header';
import Hero from '../components/sections/Hero';
import AuthModal from '../components/modals/AuthModal';

const LandingPage: React.FC = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authModalTab, setAuthModalTab] = useState<'login' | 'signup'>('login');

  const handleLoginClick = () => {
    setAuthModalTab('login');
    setIsAuthModalOpen(true);
  };

  const handleGetStartedClick = () => {
    setAuthModalTab('signup');
    setIsAuthModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Header onLoginClick={handleLoginClick} />
      <Hero onGetStartedClick={handleGetStartedClick} />
      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)}
        defaultTab={authModalTab}
      />
    </div>
  );
};

export default LandingPage;