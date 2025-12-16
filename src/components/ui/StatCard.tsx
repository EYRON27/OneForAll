import React from 'react';

interface StatCardProps {
  title: string;
  value: number | string;
  icon: string;
  color: 'orange' | 'blue' | 'green' | 'purple';
  showSeeAll?: boolean;
  onClickSeeAll?: () => void;
}

const StatCard: React.FC<StatCardProps> = ({ 
  title, 
  value, 
  icon, 
  color, 
  showSeeAll = true,
  onClickSeeAll 
}) => {
  const colorClasses = {
    orange: 'bg-gradient-to-br from-[#ff7a2d] to-[#ff9e5c]',
    blue: 'bg-gradient-to-br from-[#3b82f6] to-[#60a5fa]',
    green: 'bg-gradient-to-br from-[#10b981] to-[#34d399]',
    purple: 'bg-gradient-to-br from-[#8b5cf6] to-[#a78bfa]',
  };

  const textColors = {
    orange: 'text-[#ff7a2d]',
    blue: 'text-[#3b82f6]',
    green: 'text-[#10b981]',
    purple: 'text-[#8b5cf6]',
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className={`${colorClasses[color]} w-12 h-12 rounded-xl flex items-center justify-center`}>
            <span className="text-xl text-white">{icon}</span>
          </div>
          <h3 className="font-semibold text-gray-800">{title}</h3>
        </div>
        {showSeeAll && onClickSeeAll && (
          <button
            onClick={onClickSeeAll}
            className={`text-sm font-medium ${textColors[color]} hover:opacity-80 transition-opacity`}
          >
            See all →
          </button>
        )}
      </div>
      <div className="flex items-baseline gap-2">
        <span className="text-4xl font-bold text-gray-900">{value}</span>
      </div>
    </div>
  );
};

export default StatCard;