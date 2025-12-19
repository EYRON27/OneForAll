import React from 'react';

interface Transaction {
  id: number;
  date: string;
  category: string;
  amount: string;
  reason: string;
}

interface TransactionListProps {
  transactions: Transaction[];
}

const TransactionList: React.FC<TransactionListProps> = ({ transactions }) => {
  return (
    <div className="mt-12">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-white text-2xl font-bold">All Transactions</h3>
        <div className="flex gap-4">
          <button className="bg-[#2b3544] text-white px-6 py-2 rounded-lg border border-gray-600 hover:border-[#ff7a2d] transition-colors">
            Search
          </button>
          <select className="bg-[#2b3544] text-white px-6 py-2 rounded-lg border border-gray-600 focus:outline-none focus:border-[#ff7a2d]">
            <option>All</option>
            <option>Personal Money</option>
            <option>Business Money</option>
            <option>Savings Money</option>
          </select>
        </div>
      </div>

      <div className="space-y-4">
        {transactions.map((transaction) => (
          <div key={transaction.id} className="bg-[#2b3544] border border-gray-700 rounded-xl p-6 flex items-center justify-between">
            <div className="flex-1">
              <div className="text-gray-400 text-sm mb-2">Added: {transaction.date}</div>
              <h4 className="text-white text-xl font-bold mb-2">{transaction.category}</h4>
              <p className="text-green-400 text-lg font-semibold mb-1">{transaction.amount}</p>
              <p className="text-gray-300">{transaction.reason}</p>
            </div>
            <button className="text-white text-lg font-semibold hover:text-[#ff7a2d] transition-colors">
              Edit
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TransactionList;
