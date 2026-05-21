import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { signIn } from '../lib/auth-client';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const { data, error: loginError } = await signIn.email({
      email,
      password,
    }, {
      onRequest: () => {
        setLoading(true);
      },
      onSuccess: () => {
        setLoading(false);
        navigate('/dashboard');
      },
      onError: (ctx) => {
        setLoading(false);
        setError(ctx.error.message);
      }
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-surface text-on-surface p-4">
      <div className="glass-panel p-8 rounded-xl max-w-md w-full border border-outline-variant/30 shadow-lg bg-surface-container-low">
        <div className="text-center mb-8">
          <div className="text-2xl font-bold font-headline text-primary mb-2">Electron Volt</div>
          <h2 className="text-3xl font-bold">Welcome Back</h2>
          <p className="text-on-surface-variant mt-2 text-sm">Log in to your account</p>
        </div>
        
        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-sm font-label text-on-surface-variant mb-1">Email</label>
            <input 
              type="email" 
              required
              className="w-full px-4 py-2.5 bg-surface text-on-surface border border-outline rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-label text-on-surface-variant mb-1">Password</label>
            <input 
              type="password" 
              required
              className="w-full px-4 py-2.5 bg-surface text-on-surface border border-outline rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
            />
          </div>
          <button 
            type="submit"
            disabled={loading}
            className="w-full py-3 mt-4 bg-gradient-to-r from-primary to-primary-dim text-[#040e21] font-bold rounded-lg hover:shadow-[0_0_20px_rgba(109,221,255,0.4)] transition-all disabled:opacity-50"
          >
            {loading ? "Logging in..." : "Log In"}
          </button>
        </form>
        
        {error && <p className="text-red-400 mt-4 text-center">{error}</p>}

        <p className="mt-8 text-center text-on-surface-variant text-sm">
          Don't have an account? <Link to="/signup" className="text-primary font-bold hover:underline">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
