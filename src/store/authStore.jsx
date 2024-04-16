import { create } from 'zustand';

export const useAuthStore = create((set) => ({
  isAuthenticated: false,
  username: '',
  loginSuccess: (username) => set({ isAuthenticated: true, username }),
  logout: () => set({ isAuthenticated: false, username: '' }),
}));
