import React, { useState } from 'react';

const SignupCard: React.FC = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async () => {
    setError(null);
    setLoading(true);
    try {
      const newUser = { email };
      console.log('New user:', newUser);
      
      await new Promise(resolve => setTimeout(resolve, 1000));
      window.location.href = '/login';
    } catch (err) {
      setError('Signup failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center p-16 bg-[#4b5f86] text-white">
      <div className="w-full max-w-md">
      <a href="/" className="inline-block mb-6 px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg font-medium transition-colors">
        ← Back to Home
      </a>
      <h1 className="text-6xl font-extrabold text-[#ff7a2d] mb-3 drop-shadow-[0_3px_0_rgba(0,0,0,0.6)]">Signup</h1>
      <p className="text-xl text-[#e6d5c0] mb-10">and get your work done!</p>

      <div className="space-y-6">
        <div>
          <label className="text-lg text-[#e6d5c0] mb-3 block">Email</label>
          <div className="relative">
            <input
              value={email}
              onChange={e => setEmail(e.target.value)}
              type="email"
              placeholder=""
              className="w-full rounded-[20px] border-2 border-[#ff7a2d] bg-transparent pl-12 pr-6 py-6 text-xl text-white outline-none focus:ring-2 focus:ring-[#ff7a2d]/30"
              required
            />
            <div className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-white/90"> 
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M22 6l-10 7L2 6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </div>

        {error && <div className="text-base text-red-400">{error}</div>}

        <button 
          disabled={loading} 
          onClick={handleSubmit}
          className="w-full bg-[#ffedd5] text-[#ff7a2d] rounded-[20px] py-6 text-xl font-semibold border-2 border-[#ff7a2d] shadow-[0_6px_0_rgba(124,58,237,0.12)] hover:bg-[#ff7a2d] hover:text-white transition-all duration-300"
        >
          {loading ? 'Creating account...' : 'Sign Up'}
        </button>
      </div>

      <div className="flex items-center gap-4 my-8">
        <div className="flex-1 h-px bg-white/10" />
        <div className="text-base text-white/60">or</div>
        <div className="flex-1 h-px bg-white/10" />
      </div>

      <button className="w-full bg-[#ffedd5] text-[#111] rounded-[20px] py-6 text-xl font-medium flex items-center justify-center gap-3 border-2 border-[#ff7a2d] hover:bg-[#ff7a2d] hover:text-white transition-all duration-300">
        <span className="bg-white rounded-full w-8 h-8 flex items-center justify-center text-base font-semibold">G</span>
        <span className="text-[#ff7a2d]">Sign up with Google</span>
      </button>

      <p className="text-center text-base text-white/70 mt-8">
        Already have an account? <a href="/login" className="text-[#ff7a2d] font-semibold hover:text-white transition-colors">Sign in</a>
      </p>
      </div>
    </div>
  );
};

const SignupPage: React.FC = () => {
  return (
    <main className="min-h-screen flex bg-black">
      {/* left panel (60%) - SIGNUP FORM */}
      <div className="w-full md:w-3/5 flex items-center justify-center">
        <div className="w-full h-full flex items-center justify-center">
          <SignupCard />
        </div>
      </div>

      {/* right image (40%) - put your vault image at public/vault-right.jpg */}
      <div className="hidden md:block md:w-2/5 bg-[url('/vault-right.jpg')] bg-cover bg-center" />
    </main>
  );
};

export default SignupPage;