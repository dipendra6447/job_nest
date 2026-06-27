"use client";
import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import './Login.css';

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const formRef = useRef<HTMLDivElement>(null);
  const leftSideRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initial entrance animation
    const ctx = gsap.context(() => {
      gsap.from(leftSideRef.current, { x: -50, opacity: 0, duration: 1, ease: 'power3.out' });
      gsap.from(formRef.current, { y: 30, opacity: 0, duration: 0.8, delay: 0.3, ease: 'power3.out' });
    });
    return () => ctx.revert();
  }, []);

  const handleToggle = () => {
    // Animate form switch
    gsap.to(formRef.current, {
      opacity: 0,
      y: 20,
      duration: 0.2,
      onComplete: () => {
        setIsLogin(!isLogin);
        setError('');
        gsap.to(formRef.current, { opacity: 1, y: 0, duration: 0.4, ease: 'power3.out' });
      }
    });
  };

  const [successMsg, setSuccessMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    const endpoint = isLogin ? '/api/auth/login' : '/api/auth/register';
    
    try {
      const res = await fetch(`http://localhost:5000${endpoint}`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });

      const data = await res.json();
      
      if (!res.ok) {
        throw new Error(data.message || 'Authentication failed');
      }

      // Show success and redirect
      setSuccessMsg(isLogin ? 'Welcome back! Redirecting...' : 'Account created! Redirecting...');
      setTimeout(() => {
        window.location.href = '/';
      }, 800);
      
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="auth-page-wrapper">
      {/* Background glow effects */}
      <div className="auth-glow-circle circle-1"></div>
      <div className="auth-glow-circle circle-2"></div>

      {/* Left Branding Side */}
      <div className="auth-split-left" ref={leftSideRef}>
        <div className="auth-brand-text">
          <h1 className="auth-brand-title">
            Unlock Your Next <br /> Career Move.
          </h1>
          <p className="auth-brand-subtitle">
            Join thousands of professionals finding their dream roles at top companies worldwide. Premium roles, exclusive insights, zero noise.
          </p>
        </div>
      </div>

      {/* Right Form Side */}
      <div className="auth-split-right">
        <div className="auth-form-container" ref={formRef}>
          <div className="auth-form-header">
            <h2 className="auth-form-title">{isLogin ? 'Welcome Back' : 'Create Account'}</h2>
            <p className="auth-form-subtitle">
              {isLogin ? 'Sign in to access your dashboard' : 'Start your journey with JobNest today'}
            </p>
          </div>

          {error && <div className="auth-error-msg">{error}</div>}
          {successMsg && <div className="auth-error-msg" style={{ background: 'rgba(34, 197, 94, 0.1)', borderColor: 'rgba(34, 197, 94, 0.2)', color: '#86efac' }}>{successMsg}</div>}

          {/* GOOGLE OAUTH BUTTON */}
          <a href="http://localhost:5000/api/auth/google" className="auth-social-btn">
            <svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Continue with Google
          </a>

          <div className="auth-divider">or continue with email</div>

          <form onSubmit={handleSubmit}>
            <div className="auth-input-group">
              <label className="auth-label">Email Address</label>
              <input 
                type="email" 
                className="auth-input" 
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="auth-input-group">
              <label className="auth-label">Password</label>
              <input 
                type="password" 
                className="auth-input" 
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="auth-submit-btn" disabled={isLoading}>
              {isLoading ? 'Please wait...' : (isLogin ? 'Sign In' : 'Create Account')}
            </button>
          </form>

          <div className="auth-switch-text">
            {isLogin ? "Don't have an account?" : "Already have an account?"}
            <button type="button" className="auth-switch-link" onClick={handleToggle}>
              {isLogin ? 'Sign up' : 'Sign in'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
