import React from 'react';
import LoginCard from '../components/auth/LoginCard';

const LoginPage: React.FC = () => {
  return (
    <main className="min-h-screen flex bg-black">
      {/* left image - put your vault image at public/vault-left.jpg */}
      <div className="hidden md:block md:w-1/4 lg:w-1/4 bg-[url('/vault-left.jpg')] bg-cover bg-center" />

      {/* right panel (3/4) */}
      <div className="w-full md:w-3/4 lg:w-3/4 flex items-center justify-center pl-4 md:pl-8 lg:pl-16">
        <div className="px-8 py-12 w-full flex items-center justify-start">
          <LoginCard />
        </div>
      </div>
    </main>
  );
};

export default LoginPage;
