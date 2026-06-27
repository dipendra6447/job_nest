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

const API_BASE = 'http://localhost:5000';

export function useAuth(): AuthState {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchUser = useCallback(async () => {
    try {
      const res = await fetch(`${API_BASE}/api/auth/me`, {
        credentials: 'include',
      });
      if (res.ok) {
        const data = await res.json();
        setUser(data.data);
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
    fetchUser();
  }, [fetchUser]);

  const logout = useCallback(async () => {
    try {
      await fetch(`${API_BASE}/api/auth/logout`, {
        method: 'POST',
        credentials: 'include',
      });
    } catch {
      // ignore
    }
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
