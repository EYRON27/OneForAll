import React, { useState } from 'react';

interface AddTaskModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddTask: (task: { title: string; description: string; dueDate: string }) => void;
}

const AddTaskModal: React.FC<AddTaskModalProps> = ({ isOpen, onClose, onAddTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddTask({ title, description, dueDate });
    setTitle('');
    setDescription('');
    setDueDate('');
    onClose();
  };

  const handleCancel = () => {
    setTitle('');
    setDescription('');
    setDueDate('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm" onClick={onClose}>
      <div 
        className="relative w-full max-w-md mx-4 bg-[#0a0a0a] rounded-2xl p-8 shadow-2xl border border-gray-800" 
        onClick={e => e.stopPropagation()}
      >
        <h2 className="text-[#ff7a2d] text-2xl font-bold mb-8 text-center">Add Task</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title */}
          <div>
            <label className="text-white text-sm mb-2 block">Title</label>
            <input
              type="text"
              value={title}
              onChange={e => setTitle(e.target.value)}
              className="w-full bg-transparent border-b border-gray-700 text-white px-0 py-2 outline-none focus:border-[#ff7a2d] transition-colors"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className="text-white text-sm mb-2 block">Description</label>
            <input
              type="text"
              value={description}
              onChange={e => setDescription(e.target.value)}
              className="w-full bg-transparent border-b border-gray-700 text-white px-0 py-2 outline-none focus:border-[#ff7a2d] transition-colors"
              required
            />
          </div>

          {/* Deadline */}
          <div>
            <label className="text-white text-sm mb-2 block">Deadline</label>
            <div className="relative">
              <input
                type="date"
                value={dueDate}
                onChange={e => setDueDate(e.target.value)}
                className="w-full bg-transparent border-b border-gray-700 text-white px-0 py-2 pr-10 outline-none focus:border-[#ff7a2d] transition-colors [color-scheme:dark]"
                required
              />
              <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#ff7a2d">
                  <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zM5 8V6h14v2H5zm2 4h10v2H7v-2z"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 pt-4">
            <button
              type="submit"
              className="flex-1 bg-[#e6d5c0] text-[#ff7a2d] rounded-xl py-3 font-bold flex items-center justify-center gap-2 hover:bg-[#f5ddb8] transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
              </svg>
              Add Task
            </button>
            <button
              type="button"
              onClick={handleCancel}
              className="flex-1 bg-[#e6d5c0] text-red-600 rounded-xl py-3 font-bold hover:bg-[#f5ddb8] transition-colors"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTaskModal;
