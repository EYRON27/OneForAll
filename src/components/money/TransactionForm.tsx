import React from 'react';

interface TransactionFormProps {
  formData: {
    category: string;
    amount: string;
    reason: string;
  };
  onFormChange: (data: { category: string; amount: string; reason: string }) => void;
  onCancel: () => void;
  onSave: () => void;
  title?: string;
  showFilters?: boolean;
}

const TransactionForm: React.FC<TransactionFormProps> = ({ 
  formData, 
  onFormChange, 
  onCancel, 
  onSave,
  title = 'Create Category',
  showFilters = false
}) => {
  return (
    <div className="mt-12">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-white text-2xl font-bold">{title}</h3>
        {showFilters && (
          <div className="flex gap-4">
            <button className="bg-[#2b3544] text-white px-6 py-2 rounded-lg border border-gray-600 hover:border-[#ff7a2d] transition-colors">
              Search
            </button>
            <select className="bg-[#2b3544] text-white px-6 py-2 rounded-lg border border-gray-600 focus:outline-none focus:border-[#ff7a2d]">
              <option>Monthly</option>
              <option>Weekly</option>
              <option>Daily</option>
            </select>
          </div>
        )}
      </div>
      
      <div className="space-y-6 max-w-2xl">
        {/* Category Dropdown */}
        <div>
          <label className="text-white text-lg font-semibold mb-2 block">Category</label>
          <select
            value={formData.category}
            onChange={(e) => onFormChange({ ...formData, category: e.target.value })}
            className="w-full bg-[#2b3544] border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#ff7a2d]"
          >
            {title === 'Add Transaction' ? (
              <>
                <option value="Personal">Personal</option>
                <option value="Business Money">Business Money</option>
                <option value="Savings Money">Savings Money</option>
              </>
            ) : (
              <>
                <option value="" disabled>Select category</option>
                <option value="Personal Money">Personal Money</option>
                <option value="Business Money">Business Money</option>
                <option value="Savings Money">Savings Money</option>
              </>
            )}
          </select>
        </div>

        {/* Amount Input */}
        <div>
          <label className="text-white text-lg font-semibold mb-2 block">Amount</label>
          <input
            type="text"
            placeholder="Enter Amount"
            value={formData.amount}
            onChange={(e) => onFormChange({ ...formData, amount: e.target.value })}
            className="w-full bg-transparent border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#ff7a2d]"
          />
        </div>

        {/* Reason Input */}
        <div>
          <label className="text-white text-lg font-semibold mb-2 block">Reason of Transaction</label>
          <input
            type="text"
            placeholder="Enter Reason"
            value={formData.reason}
            onChange={(e) => onFormChange({ ...formData, reason: e.target.value })}
            className="w-full bg-transparent border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#ff7a2d]"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 pt-4">
          <button
            onClick={onCancel}
            className="text-red-500 font-semibold hover:opacity-80 transition-opacity"
          >
            Cancel
          </button>
          <button
            onClick={onSave}
            className="bg-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default TransactionForm;
