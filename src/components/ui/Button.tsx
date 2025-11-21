import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  loading = false,
  ...props 
}) => {
  const baseClasses = "w-full py-3 px-4 rounded-lg font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors";
  const variants = {
    primary: "bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 text-white",
    secondary: "bg-gray-200 hover:bg-gray-300 focus:ring-gray-500 text-gray-800"
  };

  return (
    <button
      {...props}
      className={`${baseClasses} ${variants[variant]} ${
        loading ? 'opacity-50 cursor-not-allowed' : ''
      }`}
      disabled={loading || props.disabled}
    >
      {loading ? 'Loading...' : children}
    </button>
  );
};

export default Button;