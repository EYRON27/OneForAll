import React, { useState } from 'react';

const LoginCard: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const res = await fetch('/users.json');
      const data = await res.json();
      const found = (data.users || []).find((u: any) => u.email === email && u.password === password);
      if (found) {
        localStorage.setItem('user', JSON.stringify({ email: found.email, name: found.name }));
        window.location.href = '/';
      } else {
        setError('Invalid email or password');
      }
    } catch (err) {
      setError('Login failed. Could not load user data.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-2xl p-16 bg-[#4b5f86] rounded-tr-[48px] rounded-br-[48px] text-white">
      <h1 className="text-4xl font-extrabold text-[#ff7a2d] mb-2 drop-shadow-[0_3px_0_rgba(0,0,0,0.6)]">Login</h1>
      <p className="text-sm text-[#e6d5c0] mb-8">make yourself secure and productive.</p>

      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <label className="text-sm text-[#e6d5c0] mb-2 block">Email</label>
          <div className="relative">
            <input
              value={email}
              onChange={e => setEmail(e.target.value)}
              type="email"
              placeholder=""
              className="w-full rounded-xl border-2 border-[#ff7a2d] bg-transparent pl-10 pr-4 py-3 text-white outline-none focus:ring-2 focus:ring-[#ff7a2d]/30"
              required
            />
            <div className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-white/90"> 
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                <path d="M12 12c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5 2.239 5 5 5z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M4 20c0-4 4-6 8-6s8 2 8 6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </div>

        <div>
          <label className="text-sm text-[#e6d5c0] mb-2 block">Password</label>
          <div className="relative">
            <input
              value={password}
              onChange={e => setPassword(e.target.value)}
              type="password"
              placeholder=""
              className="w-full rounded-xl border-2 border-[#ff7a2d] bg-transparent pl-4 pr-4 py-3 text-white outline-none focus:ring-2 focus:ring-[#ff7a2d]/30"
              required
            />
          </div>
        </div>

        {error && <div className="text-sm text-red-400">{error}</div>}

        <button disabled={loading} type="submit" className="w-full bg-[#ffedd5] text-[#ff7a2d] rounded-xl py-3 font-semibold border-2 border-[#ff7a2d] shadow-[0_6px_0_rgba(124,58,237,0.12)]">
          {loading ? 'Signing in...' : 'Sign In'}
        </button>
      </form>

      <div className="flex items-center gap-4 my-6">
        <div className="flex-1 h-px bg-white/10" />
        <div className="text-sm text-white/60">or</div>
        <div className="flex-1 h-px bg-white/10" />
      </div>

      <button className="w-full bg-[#ffedd5] text-[#111] rounded-xl py-3 font-medium flex items-center justify-center gap-3 border-2 border-[#ff7a2d]">
        <span className="bg-white rounded-full w-6 h-6 flex items-center justify-center text-sm">G</span>
        <span className="text-[#ff7a2d]">Sign in with Google</span>
      </button>

      <p className="text-center text-sm text-white/70 mt-6">
        Don't have an account? <a href="/signup" className="text-[#ff7a2d] font-semibold">Sign up</a>
      </p>
    </div>
  );
};

export default LoginCard;
