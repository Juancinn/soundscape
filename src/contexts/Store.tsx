import { create } from "zustand";

interface User {
  id: string;
  username: string;
  email: string;
  password: string;
}

interface StoreState {
  user: User | null;
  isAuthenticated: boolean;
  setUser: (user: User) => void;
  logout: () => void;
}

const useStore = create<StoreState>((set) => ({
  user: null,
  isAuthenticated: false,
  setUser: (user) => set({ user, isAuthenticated: true }),
  logout: () => set({ user: null, isAuthenticated: false }),
}));

export default useStore;
