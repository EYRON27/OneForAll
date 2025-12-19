import React, { useState } from 'react';

interface AccountCardProps {
  id: number;
  serviceName: string;
  username: string;
  email: string;
  password: string;
  onDelete: (id: number) => void;
}

const AccountCard: React.FC<AccountCardProps> = ({ 
  id, 
  serviceName, 
  username, 
  email, 
  password, 
  onDelete 
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="bg-[#2b3544] rounded-lg p-6">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-white text-xl font-semibold">{serviceName}</h3>
        <button 
          onClick={() => onDelete(id)}
          className="text-gray-400 hover:text-red-500 transition-colors"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
          </svg>
        </button>
      </div>
      
      <div className="space-y-2">
        <div>
          <p className="text-gray-400 text-sm">Username</p>
          <p className="text-white">{username}</p>
        </div>
        <div>
          <p className="text-gray-400 text-sm">Email</p>
          <p className="text-white">{email}</p>
        </div>
        <div>
          <p className="text-gray-400 text-sm">Password</p>
          <div className="flex items-center gap-2">
            <p className="text-white flex-1">{showPassword ? password : '**************'}</p>
            <button
              onClick={() => setShowPassword(!showPassword)}
              className="text-gray-400 hover:text-white transition-colors"
            >
              {showPassword ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"/>
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      
      <div className="mt-4">
        <button className="text-gray-400 hover:text-white transition-colors">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default AccountCard;
