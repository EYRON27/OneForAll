import React, { useState } from 'react';

interface AddPassModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddPass: (pass: { category: string; platform: string; username: string; password: string }) => void;
}

const AddPassModal: React.FC<AddPassModalProps> = ({ isOpen, onClose, onAddPass }) => {
  const [category, setCategory] = useState('SOCIAL MEDIA');
  const [platform, setPlatform] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddPass({ category, platform, username, password });
    setCategory('SOCIAL MEDIA');
    setPlatform('');
    setUsername('');
    setPassword('');
    onClose();
  };

  const handleCancel = () => {
    setCategory('SOCIAL MEDIA');
    setPlatform('');
    setUsername('');
    setPassword('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm" onClick={onClose}>
      <div 
        className="relative w-full max-w-md mx-4 bg-[#0a0a0a] rounded-2xl p-8 shadow-2xl border border-gray-800" 
        onClick={e => e.stopPropagation()}
      >
        <h2 className="text-[#ff7a2d] text-2xl font-bold mb-8 text-center">Add Pass</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Category */}
          <div>
            <label className="text-white text-sm mb-2 block">Category</label>
            <div className="relative">
              <select
                value={category}
                onChange={e => setCategory(e.target.value)}
                className="w-full bg-transparent border-b border-gray-700 text-white px-0 py-2 pr-8 outline-none focus:border-[#ff7a2d] transition-colors appearance-none cursor-pointer"
                required
              >
                <option value="SOCIAL MEDIA" className="bg-[#1a1a1a]">Social Media</option>
                <option value="GAMES" className="bg-[#1a1a1a]">Games</option>
                <option value="FINANCE" className="bg-[#1a1a1a]">Finance</option>
                <option value="WORK" className="bg-[#1a1a1a]">Work</option>
                <option value="OTHER" className="bg-[#1a1a1a]">Other</option>
              </select>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                  <path d="M7 10l5 5 5-5z"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Platform */}
          <div>
            <label className="text-white text-sm mb-2 block">Platform</label>
            <input
              type="text"
              value={platform}
              onChange={e => setPlatform(e.target.value)}
              className="w-full bg-transparent border-b border-gray-700 text-white px-0 py-2 outline-none focus:border-[#ff7a2d] transition-colors"
              required
            />
          </div>

          {/* Username */}
          <div>
            <label className="text-white text-sm mb-2 block">Username</label>
            <input
              type="text"
              value={username}
              onChange={e => setUsername(e.target.value)}
              className="w-full bg-transparent border-b border-gray-700 text-white px-0 py-2 outline-none focus:border-[#ff7a2d] transition-colors"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-white text-sm mb-2 block">Password</label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="w-full bg-transparent border-b border-gray-700 text-white px-0 py-2 outline-none focus:border-[#ff7a2d] transition-colors"
              required
            />
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
              Add Pass
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

export default AddPassModal;
