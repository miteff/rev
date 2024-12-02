import React, { createContext, useContext, useState, useEffect } from 'react';
import { User } from '../types';
import { getStoredToken, setStoredToken, removeStoredToken } from '../utils/auth';
import { getCurrentUser } from '../services/api';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (token: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  login: async () => {},
  logout: () => {},
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initAuth = async () => {
      try {
        const token = getStoredToken();
        if (token) {
          const userData = await getCurrentUser();
          setUser(userData);
        }
      } catch (error) {
        console.error('Failed to get user data:', error);
        removeStoredToken();
      } finally {
        setLoading(false);
      }
    };

    initAuth();
  }, []);

  const login = async (token: string) => {
    try {
      setStoredToken(token);
      const userData = await getCurrentUser();
      setUser(userData);
    } catch (error) {
      removeStoredToken();
      throw error;
    }
  };

  const logout = () => {
    removeStoredToken();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}