import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AppSidebar from '../components/layout/AppSidebar';
import MobileNav from '../components/layout/MobileNav';
import PageHeader from '../components/layout/PageHeader';
import AccountCard from '../components/pass/AccountCard';
import ConfirmationModal from '../components/ui/ConfirmationModal';
import AddPassModal from '../components/modals/AddPassModal';

interface Account {
  id: number;
  category: string;
  serviceName: string;
  username: string;
  email: string;
  password: string;
}

const PassPage: React.FC = () => {
  const navigate = useNavigate();
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [showAddPassModal, setShowAddPassModal] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [accounts, setAccounts] = useState<Account[]>([
    {
      id: 1,
      category: 'SOCIAL MEDIA',
      serviceName: 'Facebook',
      username: 'Username',
      email: 'example@email.com',
      password: '**************'
    },
    {
      id: 2,
      category: 'SOCIAL MEDIA',
      serviceName: 'Instagram',
      username: 'Username',
      email: 'example@email.com',
      password: '**************'
    },
    {
      id: 3,
      category: 'SOCIAL MEDIA',
      serviceName: 'X',
      username: 'Username',
      email: 'example@email.com',
      password: '**************'
    },
    {
      id: 4,
      category: 'GAMES',
      serviceName: 'Valorant',
      username: 'Username',
      email: 'example@email.com',
      password: '**************'
    },
    {
      id: 5,
      category: 'GAMES',
      serviceName: 'Crossfire',
      username: 'Username',
      email: 'example@email.com',
      password: '**************'
    },
    {
      id: 6,
      category: 'FINANCE',
      serviceName: 'BankName',
      username: 'Username',
      email: 'example@email.com',
      password: '**************'
    },
    {
      id: 7,
      category: 'FINANCE',
      serviceName: 'GCash',
      username: 'Username',
      email: 'example@email.com',
      password: '**************'
    },
    {
      id: 8,
      category: 'FINANCE',
      serviceName: 'PayCash',
      username: 'Username',
      email: 'example@email.com',
      password: '**************'
    }
  ]);

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

  const handleDeleteAccount = (id: number) => {
    setAccounts(accounts.filter(account => account.id !== id));
  };

  const handleAddPass = (passData: { category: string; platform: string; username: string; password: string }) => {
    const newAccount: Account = {
      id: Date.now(),
      category: passData.category,
      serviceName: passData.platform,
      username: passData.username,
      email: '',
      password: passData.password
    };
    setAccounts([...accounts, newAccount]);
  };

  const filteredAccounts = selectedFilter === 'All' 
    ? accounts 
    : accounts.filter(account => account.category === selectedFilter);

  const socialMediaAccounts = filteredAccounts.filter(a => a.category === 'SOCIAL MEDIA');
  const gameAccounts = filteredAccounts.filter(a => a.category === 'GAMES');
  const financeAccounts = filteredAccounts.filter(a => a.category === 'FINANCE');

  return (
    <div className="min-h-screen bg-[#1a1612] flex flex-col md:flex-row">
      <MobileNav onLogout={handleLogout} />
      <AppSidebar />

      <div className="flex-1 flex flex-col">
        <PageHeader pageTitle="Pass Manager" onLogout={handleLogout} />

        <main className="flex-1 p-4 sm:p-6 md:p-8 lg:p-12 overflow-auto">
          {/* Pass Header */}
          <div className="flex items-center gap-3 mb-6 md:mb-8">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#ff7a2d] rounded-full flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="white" className="sm:w-7 sm:h-7">
                <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>
              </svg>
            </div>
            <h2 className="text-white text-2xl sm:text-3xl font-bold">Pass</h2>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12">
            <div className="bg-[#4a5568] rounded-2xl p-4 sm:p-6 md:p-8 text-center">
              <h3 className="text-white text-lg sm:text-xl font-semibold mb-2 sm:mb-4">Saved Accounts</h3>
              <p className="text-[#ff7a2d] text-5xl sm:text-6xl md:text-7xl font-bold mb-2 sm:mb-4">99</p>
              <button className="text-[#ff7a2d] text-sm sm:text-base font-semibold hover:underline">See all</button>
            </div>
            
            <div className="bg-[#e6d5c0] rounded-2xl p-4 sm:p-6 md:p-8 text-center">
              <h3 className="text-[#2b3544] text-lg sm:text-xl font-semibold mb-2 sm:mb-4">Social Media</h3>
              <p className="text-[#2b3544] text-5xl sm:text-6xl md:text-7xl font-bold mb-2 sm:mb-4">99</p>
              <button className="text-[#ff7a2d] text-sm sm:text-base font-semibold hover:underline">See all</button>
            </div>
            
            <div className="bg-[#e6d5c0] rounded-2xl p-4 sm:p-6 md:p-8 text-center">
              <h3 className="text-[#2b3544] text-lg sm:text-xl font-semibold mb-2 sm:mb-4">Games</h3>
              <p className="text-[#2b3544] text-5xl sm:text-6xl md:text-7xl font-bold mb-2 sm:mb-4">99</p>
              <button className="text-[#ff7a2d] text-sm sm:text-base font-semibold hover:underline">See all</button>
            </div>
          </div>

          {/* Accounts Section Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
            <h3 className="text-white text-xl sm:text-2xl font-bold">Accounts</h3>
            <div className="flex items-center gap-4 w-full sm:w-auto">
              <select 
                value={selectedFilter}
                onChange={(e) => setSelectedFilter(e.target.value)}
                className="bg-[#2b3544] text-white px-3 sm:px-4 py-2 rounded-lg border border-gray-600 focus:outline-none focus:border-[#ff7a2d] text-sm sm:text-base flex-1 sm:flex-initial"
              >
                <option value="All">All</option>
                <option value="SOCIAL MEDIA">Social Media</option>
                <option value="GAMES">Games</option>
                <option value="FINANCE">Finance</option>
              </select>
              <button 
                onClick={() => setShowAddPassModal(true)}
                className="flex items-center gap-2 text-[#ff7a2d] hover:opacity-80 transition-opacity"
              >
                <div className="w-8 h-8 bg-transparent border-2 border-[#ff7a2d] rounded-full flex items-center justify-center">
                  <span className="text-[#ff7a2d] text-xl font-bold leading-none">+</span>
                </div>
                <span className="font-semibold text-sm sm:text-base">Add Pass</span>
              </button>
            </div>
          </div>

          {/* Account Sections */}
          {(selectedFilter === 'All' || selectedFilter === 'SOCIAL MEDIA') && socialMediaAccounts.length > 0 && (
            <div className="mb-8">
              <h3 className="text-white text-xl sm:text-2xl font-bold mb-4">Social Media</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {socialMediaAccounts.map((account) => (
                  <AccountCard
                    key={account.id}
                    id={account.id}
                    serviceName={account.serviceName}
                    username={account.username}
                    email={account.email}
                    password={account.password}
                    onDelete={handleDeleteAccount}
                  />
                ))}
              </div>
            </div>
          )}

          {(selectedFilter === 'All' || selectedFilter === 'GAMES') && gameAccounts.length > 0 && (
            <div className="mb-8">
              <h3 className="text-white text-xl sm:text-2xl font-bold mb-4">Games</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {gameAccounts.map((account) => (
                  <AccountCard
                    key={account.id}
                    id={account.id}
                    serviceName={account.serviceName}
                    username={account.username}
                    email={account.email}
                    password={account.password}
                    onDelete={handleDeleteAccount}
                  />
                ))}
              </div>
            </div>
          )}

          {(selectedFilter === 'All' || selectedFilter === 'FINANCE') && financeAccounts.length > 0 && (
            <div className="mb-8">
              <h3 className="text-white text-xl sm:text-2xl font-bold mb-4">Finance</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {financeAccounts.map((account) => (
                  <AccountCard
                    key={account.id}
                    id={account.id}
                    serviceName={account.serviceName}
                    username={account.username}
                    email={account.email}
                    password={account.password}
                    onDelete={handleDeleteAccount}
                  />
                ))}
              </div>
            </div>
          )}
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

      <AddPassModal
        isOpen={showAddPassModal}
        onClose={() => setShowAddPassModal(false)}
        onAddPass={handleAddPass}
      />
    </div>
  );
};

export default PassPage;
