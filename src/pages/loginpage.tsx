import React from 'react';
import LoginCard from '../components/auth/LoginCard';

const LoginPage: React.FC = () => {
  return (
    <main className="min-h-screen flex bg-black">
      {/* left panel (60%) - LOGIN FORM */}
      <div className="w-full md:w-3/5 flex items-center justify-center">
        <div className="w-full h-full flex items-center justify-center">
          <LoginCard />
        </div>
      </div>

      {/* right image (40%) - put your vault image at public/vault-right.jpg */}
      <div className="hidden md:block md:w-2/5 bg-[url('/vault-right.jpg')] bg-cover bg-center" />
    </main>
  );
};

export default LoginPage;
