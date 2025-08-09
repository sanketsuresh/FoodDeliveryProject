import { useState, useEffect } from 'react';
import { User } from '../types';

export const useAuth = () => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const savedUser = localStorage.getItem('currentUser');
    const savedAdmin = localStorage.getItem('isAdmin');
    
    if (savedUser) {
      setCurrentUser(JSON.parse(savedUser));
    }
    if (savedAdmin) {
      setIsAdmin(JSON.parse(savedAdmin));
    }
  }, []);

  const register = (username: string, email: string, password: string): boolean => {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    
    // Check if user already exists
    if (users.find((u: User) => u.email === email)) {
      return false;
    }

    const newUser: User = {
      id: Date.now().toString(),
      username,
      email,
      password
    };

    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    return true;
  };

  const login = (email: string, password: string): boolean => {
    // Check admin credentials
    if (email === 'admin@fooddelivery.com' && password === 'admin123') {
      setIsAdmin(true);
      localStorage.setItem('isAdmin', 'true');
      return true;
    }

    // Check regular user credentials
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find((u: User) => u.email === email && u.password === password);
    
    if (user) {
      setCurrentUser(user);
      localStorage.setItem('currentUser', JSON.stringify(user));
      setIsAdmin(false);
      localStorage.removeItem('isAdmin');
      return true;
    }
    
    return false;
  };

  const logout = () => {
    setCurrentUser(null);
    setIsAdmin(false);
    localStorage.removeItem('currentUser');
    localStorage.removeItem('isAdmin');
  };

  return {
    currentUser,
    isAdmin,
    register,
    login,
    logout
  };
};