import React from 'react';

interface TaskCardProps {
  id: number;
  title: string;
  description: string;
  dueDate: string;
  onDelete: (id: number) => void;
}

const TaskCard: React.FC<TaskCardProps> = ({ id, title, description, dueDate, onDelete }) => {
  return (
    <div className="bg-[#2b3544] rounded-lg p-6 flex justify-between items-start">
      <div className="flex-1">
        <h3 className="text-white text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-400 mb-2">{description}</p>
        <p className="text-[#ff7a2d] text-sm">{dueDate}</p>
      </div>
      <button 
        onClick={() => onDelete(id)}
        className="text-red-500 hover:text-red-400 transition-colors ml-4"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
        </svg>
      </button>
    </div>
  );
};

export default TaskCard;
