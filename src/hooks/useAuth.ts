"use client";
import { useState, useEffect, useCallback } from 'react';

interface User {
  id: string;
  email: string;
  googleId?: string;
  avatarUrl?: string;
  jobApplyCount: number;
  jobPostCount: number;
  roles: number[];
  createdAt: string;
}

interface AuthState {
  user: User | null;
  isLoading: boolean;
  isLoggedIn: boolean;
  logout: () => Promise<void>;
  refetch: () => Promise<void>;
}

const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

export function useAuth(): AuthState {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchUser = useCallback(async () => {
    try {
      const token = localStorage.getItem('token');
      const headers: Record<string, string> = {};
      
      if (token) {
        headers['Authorization'] = `Bearer ${token}`;
      }

      const res = await fetch(`${API_BASE}/api/auth/me`, {
        credentials: 'include',
        headers,
      });

      if (res.ok) {
        const data = await res.json();
        if (data.authenticated) {
          setUser(data.data);
        } else {
          setUser(null);
          // If backend says not authenticated, clear local token
          localStorage.removeItem('token');
        }
      } else {
        setUser(null);
      }
    } catch {
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    // 1. Check if token is in URL (from Google OAuth redirect)
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const tokenFromUrl = params.get('token');
      if (tokenFromUrl) {
        localStorage.setItem('token', tokenFromUrl);
        // Clean the URL query params
        const newUrl = window.location.pathname + window.location.hash;
        window.history.replaceState({}, document.title, newUrl);
      }
    }
    fetchUser();
  }, [fetchUser]);

  const logout = useCallback(async () => {
    try {
      const token = localStorage.getItem('token');
      const headers: Record<string, string> = {};
      if (token) {
        headers['Authorization'] = `Bearer ${token}`;
      }
      await fetch(`${API_BASE}/api/auth/logout`, {
        method: 'POST',
        credentials: 'include',
        headers,
      });
    } catch {
      // ignore
    }
    localStorage.removeItem('token');
    setUser(null);
    window.location.href = '/';
  }, []);

  return {
    user,
    isLoading,
    isLoggedIn: !!user,
    logout,
    refetch: fetchUser,
  };
}
