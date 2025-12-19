import React from 'react';

interface MoneyCardProps {
  title: string;
  amount: string;
  variant?: 'primary' | 'secondary';
  additionalInfo?: string;
  onViewTransactions?: () => void;
}

const MoneyCard: React.FC<MoneyCardProps> = ({ 
  title, 
  amount, 
  variant = 'secondary',
  additionalInfo,
  onViewTransactions 
}) => {
  const isPrimary = variant === 'primary';

  return (
    <div className={`${isPrimary ? 'bg-[#4a5568]' : 'bg-[#e6d5c0]'} rounded-2xl p-8 text-center flex-1`}>
      <h3 className={`${isPrimary ? 'text-white' : 'text-[#ff7a2d]'} text-lg font-semibold mb-4`}>{title}</h3>
      <p className={`${isPrimary ? 'text-[#ff7a2d]' : 'text-[#4a5568]'} text-6xl font-bold mb-2`}>{amount}</p>
      {additionalInfo && (
        <p className="text-green-400 text-sm mb-4">{additionalInfo}</p>
      )}
      <button 
        onClick={onViewTransactions}
        className={`${
          isPrimary 
            ? 'text-white bg-[#5a6578] px-6 py-2 rounded-lg hover:bg-[#6a7588]' 
            : 'text-[#ff7a2d] hover:underline'
        } font-semibold transition-colors mt-2`}
      >
        View Transactions
      </button>
    </div>
  );
};

export default MoneyCard;
