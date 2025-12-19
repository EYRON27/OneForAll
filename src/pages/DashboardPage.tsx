import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AppSidebar from '../components/layout/AppSidebar';
import PageHeader from '../components/layout/PageHeader';
import ConfirmationModal from '../components/ui/ConfirmationModal';

const DashboardPage: React.FC = () => {
  const navigate = useNavigate();
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const handleLogout = () => {
    setShowLogoutModal(true);
  };

  const confirmLogout = () => {
    localStorage.removeItem('user');
    setShowLogoutModal(false);
    navigate('/');
  };

  const cancelLogout = () => {
    setShowLogoutModal(false);
  };

  return (
    <div className="min-h-screen bg-[#1a1612] flex">
      <AppSidebar />

      <div className="flex-1 flex flex-col">
        <PageHeader pageTitle="Dashboard" onLogout={handleLogout} />

        <main className="flex-1 p-12 overflow-auto">
          {/* Dashboard Header */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-[#ff7a2d] rounded-full flex items-center justify-center">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
                <path d="M4 4h6v6H4V4zm10 0h6v6h-6V4zM4 14h6v6H4v-6zm10 0h6v6h-6v-6z"/>
              </svg>
            </div>
            <h2 className="text-white text-3xl font-bold">Dashboard</h2>
          </div>

          {/* Tasks Section */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="#ff7a2d">
                <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"/>
              </svg>
              <h3 className="text-white text-2xl font-bold">Tasks</h3>
            </div>
            <div className="grid grid-cols-3 gap-6">
              <div className="bg-[#ff7a2d] rounded-2xl p-8 text-center">
                <h4 className="text-white text-xl font-semibold mb-4">Tasks</h4>
                <p className="text-[#4a5568] text-7xl font-bold mb-4">99</p>
                <button 
                  onClick={() => navigate('/tasks')}
                  className="text-[#ff7a2d] bg-white px-6 py-2 rounded-lg font-semibold hover:bg-gray-100"
                >
                  See all
                </button>
              </div>
              
              <div className="bg-[#e6d5c0] rounded-2xl p-8 text-center">
                <h4 className="text-[#ff7a2d] text-xl font-semibold mb-4">To do</h4>
                <p className="text-[#4a5568] text-7xl font-bold mb-4">99</p>
                <button 
                  onClick={() => navigate('/tasks')}
                  className="text-[#ff7a2d] font-semibold hover:underline"
                >
                  See all
                </button>
              </div>
              
              <div className="bg-[#e6d5c0] rounded-2xl p-8 text-center">
                <h4 className="text-[#ff7a2d] text-xl font-semibold mb-4">Done</h4>
                <p className="text-[#4a5568] text-7xl font-bold mb-4">99</p>
                <button 
                  onClick={() => navigate('/tasks')}
                  className="text-[#ff7a2d] font-semibold hover:underline"
                >
                  See all
                </button>
              </div>
            </div>
          </div>

          {/* Pass Section */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="#ff7a2d">
                <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>
              </svg>
              <h3 className="text-white text-2xl font-bold">Pass</h3>
            </div>
            <div className="grid grid-cols-3 gap-6">
              <div className="bg-[#ff7a2d] rounded-2xl p-8 text-center">
                <h4 className="text-white text-xl font-semibold mb-4">Accounts</h4>
                <p className="text-[#4a5568] text-7xl font-bold mb-4">99</p>
                <button 
                  onClick={() => navigate('/pass')}
                  className="text-[#ff7a2d] bg-white px-6 py-2 rounded-lg font-semibold hover:bg-gray-100"
                >
                  See all
                </button>
              </div>
              
              <div className="bg-[#e6d5c0] rounded-2xl p-8 text-center">
                <h4 className="text-[#ff7a2d] text-xl font-semibold mb-4">Social Media</h4>
                <p className="text-[#4a5568] text-7xl font-bold mb-4">99</p>
                <button 
                  onClick={() => navigate('/pass')}
                  className="text-[#ff7a2d] font-semibold hover:underline"
                >
                  See all
                </button>
              </div>
              
              <div className="bg-[#e6d5c0] rounded-2xl p-8 text-center">
                <h4 className="text-[#ff7a2d] text-xl font-semibold mb-4">Games</h4>
                <p className="text-[#4a5568] text-7xl font-bold mb-4">99</p>
                <button 
                  onClick={() => navigate('/pass')}
                  className="text-[#ff7a2d] font-semibold hover:underline"
                >
                  See all
                </button>
              </div>
            </div>
          </div>

          {/* Money Section */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="#ff7a2d">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-2.84 3.11-3.21V4h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H14.3c-.05-1.11-.64-1.87-2.22-1.87-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.39 2.67 1.91s4.18 1.39 4.18 3.91c-.01 1.83-1.38 2.83-3.12 3.16z"/>
              </svg>
              <h3 className="text-white text-2xl font-bold">Money</h3>
            </div>
            <div className="grid grid-cols-3 gap-6">
              <div className="bg-[#ff7a2d] rounded-2xl p-8 text-center">
                <h4 className="text-white text-xl font-semibold mb-4">Personal Money</h4>
                <p className="text-[#4a5568] text-7xl font-bold mb-4">₱99</p>
                <button 
                  onClick={() => navigate('/money')}
                  className="text-[#ff7a2d] bg-white px-6 py-2 rounded-lg font-semibold hover:bg-gray-100"
                >
                  See all
                </button>
              </div>
              
              <div className="bg-[#e6d5c0] rounded-2xl p-8 text-center">
                <h4 className="text-[#ff7a2d] text-xl font-semibold mb-4">Business Money</h4>
                <p className="text-[#4a5568] text-7xl font-bold mb-4">₱99</p>
                <button 
                  onClick={() => navigate('/money')}
                  className="text-[#ff7a2d] font-semibold hover:underline"
                >
                  See all
                </button>
              </div>
              
              <div className="bg-[#e6d5c0] rounded-2xl p-8 text-center">
                <h4 className="text-[#ff7a2d] text-xl font-semibold mb-4">Savings Money</h4>
                <p className="text-[#4a5568] text-7xl font-bold mb-4">₱99</p>
                <button 
                  onClick={() => navigate('/money')}
                  className="text-[#ff7a2d] font-semibold hover:underline"
                >
                  See all
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>

      <ConfirmationModal
        isOpen={showLogoutModal}
        onClose={cancelLogout}
        onConfirm={confirmLogout}
        title="Logout Confirmation"
        message="Are you sure you want to logout? You will be redirected to the landing page."
        confirmText="Logout"
        cancelText="Cancel"
      />
    </div>
  );
};

export default DashboardPage;
