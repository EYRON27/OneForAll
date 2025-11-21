import React from 'react';

const SignupPage: React.FC = () => {
  return (
    <main className="min-h-screen flex bg-black">
      <div className="hidden md:block md:w-1/2 lg:w-2/5 bg-[url('/vault-left.jpg')] bg-cover bg-center" />

      <div className="w-full md:w-1/2 lg:w-3/5 flex items-center justify-center">
        <div className="w-full max-w-lg p-10 bg-[#4b5f86] rounded-tr-3xl rounded-br-3xl text-white">
          <h1 className="text-4xl font-extrabold text-[#ff7a2d] mb-2">Sign up</h1>
          <p className="text-sm text-[#e6d5c0] mb-8">Create an account to get started</p>

          <label className="text-sm text-[#e6d5c0] mb-2 block">Email</label>
          <input className="w-full rounded-lg border-2 border-[#ff7a2d] bg-transparent px-4 py-3 text-white mb-4" />

          <label className="text-sm text-[#e6d5c0] mb-2 block">Password</label>
          <input className="w-full rounded-lg border-2 border-[#ff7a2d] bg-transparent px-4 py-3 text-white mb-6" />

          <button className="w-full bg-[#ffedd5] text-[#ff7a2d] rounded-lg py-3 font-semibold mb-4">Create account</button>

          <p className="text-center text-sm text-white/70 mt-6">
            Already have an account? <a href="/login" className="text-[#ff7a2d] font-semibold">Sign in</a>
          </p>
        </div>
      </div>
    </main>
  );
};

export default SignupPage;
