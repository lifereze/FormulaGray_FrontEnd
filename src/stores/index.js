import create from "zustand";

export const userStore = create((set) => ({
  user: null,
  storeUser: (user) => set({ user: user }),
  removeUser: () => set({ user: null }),
}));
export const useRecruiter = create((set) => ({
  recruiter: { step: "contact" },
  storeRecruiter: (recruiter) => set({ recruiter: recruiter }),
}));
