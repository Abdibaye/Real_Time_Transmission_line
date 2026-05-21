import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { signUp } from '../lib/auth-client';

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const { data, error: signupError } = await signUp.email({
      email,
      password,
      name: email.split('@')[0]
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
          <h2 className="text-3xl font-bold">Create an Account</h2>
          <p className="text-on-surface-variant mt-2 text-sm">Sign up to access the transmission dashboard</p>
        </div>
        
        <form onSubmit={handleSignup} className="space-y-5">
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
            {loading ? "Signing up..." : "Sign Up"}
          </button>
        </form>
        
        {error && <p className="text-red-400 mt-4 text-center">{error}</p>}
        
        <p className="mt-8 text-center text-on-surface-variant text-sm">
          Already have an account? <Link to="/login" className="text-primary font-bold hover:underline">Log in</Link>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
