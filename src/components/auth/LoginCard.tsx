import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginCard: React.FC = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const res = await fetch('/users.json');
      const data = await res.json();
      const found = (data.users || []).find((u: any) => u.email === email);
      if (found) {
        localStorage.setItem('user', JSON.stringify({ 
          email: found.email, 
          name: found.name,
          avatar: found.avatar 
        }));
        navigate('/dashboard');
      } else {
        setError('Invalid email');
      }
    } catch (err) {
      setError('Login failed. Could not load user data.');
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
      <h1 className="text-6xl font-extrabold text-[#ff7a2d] mb-3 drop-shadow-[0_3px_0_rgba(0,0,0,0.6)]">Login</h1>
      <p className="text-xl text-[#e6d5c0] mb-10">make yourself secure and productive.</p>

      <form onSubmit={onSubmit} className="space-y-6">
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

        <button disabled={loading} type="submit" className="w-full bg-[#ffedd5] text-[#ff7a2d] rounded-[20px] py-6 text-xl font-semibold border-2 border-[#ff7a2d] shadow-[0_6px_0_rgba(124,58,237,0.12)] hover:bg-[#ff7a2d] hover:text-white transition-all duration-300">
          {loading ? 'Signing in...' : 'Sign In'}
        </button>
      </form>

      <div className="flex items-center gap-4 my-8">
        <div className="flex-1 h-px bg-white/10" />
        <div className="text-base text-white/60">or</div>
        <div className="flex-1 h-px bg-white/10" />
      </div>

      <button className="w-full bg-[#ffedd5] text-[#111] rounded-[20px] py-6 text-xl font-medium flex items-center justify-center gap-3 border-2 border-[#ff7a2d] hover:bg-[#ff7a2d] hover:text-white transition-all duration-300">
        <span className="bg-white rounded-full w-8 h-8 flex items-center justify-center text-base font-semibold">G</span>
        <span className="text-[#ff7a2d]">Sign in with Google</span>
      </button>

      <p className="text-center text-base text-white/70 mt-8">
        Don't have an account? <a href="/signup" className="text-[#ff7a2d] font-semibold hover:text-white transition-colors">Sign up</a>
      </p>
      </div>
    </div>
  );
};

export default LoginCard;