import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AppSidebar from '../components/layout/AppSidebar';
import PageHeader from '../components/layout/PageHeader';
import MoneyCard from '../components/money/MoneyCard';
import TransactionForm from '../components/money/TransactionForm';
import TransactionList from '../components/money/TransactionList';
import ConfirmationModal from '../components/ui/ConfirmationModal';

const MoneyPage: React.FC = () => {
  const navigate = useNavigate();
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [showAddTransaction, setShowAddTransaction] = useState(false);
  const [showAllTransactions, setShowAllTransactions] = useState(false);
  const [formData, setFormData] = useState({
    category: '',
    amount: '',
    reason: ''
  });

  const [transactions] = useState([
    {
      id: 1,
      date: 'Nov 29, 2025',
      category: 'Personal Money',
      amount: '+₱900',
      reason: 'Allowance'
    },
    {
      id: 2,
      date: 'Nov 29, 2025',
      category: 'Savings Money',
      amount: '+₱1,200',
      reason: 'Save'
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

  const handleCreateCategory = () => {
    setShowCreateForm(true);
    setShowAddTransaction(false);
    setShowAllTransactions(false);
    setFormData({ category: '', amount: '', reason: '' });
  };

  const handleAddTransaction = () => {
    setShowAddTransaction(true);
    setShowCreateForm(false);
    setShowAllTransactions(false);
    setFormData({ category: '', amount: '', reason: '' });
  };

  const handleViewAllTransactions = () => {
    setShowAllTransactions(true);
    setShowCreateForm(false);
    setShowAddTransaction(false);
  };

  const handleCancelForm = () => {
    setShowCreateForm(false);
    setShowAddTransaction(false);
    setFormData({ category: '', amount: '', reason: '' });
  };

  const handleSaveChanges = () => {
    console.log('Saving:', formData);
    setShowCreateForm(false);
    setShowAddTransaction(false);
    setFormData({ category: '', amount: '', reason: '' });
  };

  return (
    <div className="min-h-screen bg-[#1a1612] flex">
      <AppSidebar />

      <div className="flex-1 flex flex-col">
        <PageHeader 
          pageTitle="Money Tracker" 
          onLogout={handleLogout}
        />

        <main className="flex-1 p-12 overflow-auto">
          {/* Money Tracker Header */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-[#ff7a2d] rounded-full flex items-center justify-center">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-2.84 3.11-3.21V4h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H14.3c-.05-1.11-.64-1.87-2.22-1.87-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.39 2.67 1.91s4.18 1.39 4.18 3.91c-.01 1.83-1.38 2.83-3.12 3.16z"/>
              </svg>
            </div>
            <h2 className="text-white text-3xl font-bold">
              {showAddTransaction ? 'List of Accounts' : 'Money Tracker'}
            </h2>
          </div>
          
          <div className="flex items-start gap-8">
            {/* Money Cards */}
            <div className="flex gap-6 flex-1">
              <MoneyCard
                title="Personal Money"
                amount="₱9,900"
                variant="primary"
                additionalInfo={showAddTransaction ? '+2,300 today' : undefined}
              />
              <MoneyCard
                title="Business Money"
                amount="₱1,970"
                additionalInfo={showAddTransaction ? '+290 this today' : undefined}
              />
              <MoneyCard
                title="Savings Money"
                amount="₱2,420"
                additionalInfo={showAddTransaction ? '+30 this month' : undefined}
              />
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-4">
              <button 
                onClick={handleCreateCategory}
                className="flex items-center gap-3 text-[#ff7a2d] hover:opacity-80 transition-opacity"
              >
                <div className="w-10 h-10 bg-transparent border-2 border-[#ff7a2d] rounded-full flex items-center justify-center">
                  <span className="text-[#ff7a2d] text-2xl font-bold leading-none">+</span>
                </div>
                <span className="font-semibold whitespace-nowrap">Create Category</span>
              </button>

              <button 
                onClick={handleAddTransaction}
                className="flex items-center gap-3 text-[#ff7a2d] hover:opacity-80 transition-opacity"
              >
                <div className="w-10 h-10 bg-transparent border-2 border-[#ff7a2d] rounded-full flex items-center justify-center">
                  <span className="text-[#ff7a2d] text-2xl font-bold leading-none">+</span>
                </div>
                <span className="font-semibold whitespace-nowrap">Add Transaction</span>
              </button>
            </div>
          </div>

          {/* Create Category Form */}
          {showCreateForm && (
            <TransactionForm
              formData={formData}
              onFormChange={setFormData}
              onCancel={handleCancelForm}
              onSave={handleSaveChanges}
              title="Create Category"
            />
          )}

          {/* Add Transaction Form */}
          {showAddTransaction && (
            <TransactionForm
              formData={formData}
              onFormChange={setFormData}
              onCancel={handleCancelForm}
              onSave={handleSaveChanges}
              title="Add Transaction"
              showFilters={true}
            />
          )}

          {/* All Transactions View */}
          {showAllTransactions && (
            <TransactionList transactions={transactions} />
          )}

          {!showCreateForm && !showAddTransaction && !showAllTransactions && (
            <div className="flex justify-end mt-8">
              <button 
                onClick={handleViewAllTransactions}
                className="text-white text-lg font-semibold hover:text-[#ff7a2d] transition-colors"
              >
                View all Transactions
              </button>
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
    </div>
  );
};

export default MoneyPage;
