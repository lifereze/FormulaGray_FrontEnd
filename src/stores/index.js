import create from "zustand";

export const userStore = create((set) => ({
  user: null,
  storeUser: (user) => set({ user: user }),
  removeUser: () => set({ user: null }),
}));
export const useStage = create((set) => ({
  stage: null,
  setStage: (stage) => set({ stage: stage }),
  removeStage: () => set({ stage: null }),
}));
export const filterStore = create((set) => ({
  filter: null,
  storeFilter: (filter) => set({ filter: filter }),
  removeFilter: () => set({ filter: null }),
}));
export const searchStore = create((set) => ({
  search: null,
  storeSearch: (search) => set({ search: search }),
  removeSearch: () => set({ search: null }),
}));
export const schoolsStore = create((set) => ({
  schools: null,
  storeSchools: (schools) => set({ schools: schools }),
  removeSchools: () => set({ schools: null }),
}));
export const programsStore = create((set) => ({
  programs: null,
  storePrograms: (programs) => set({ programs: programs }),
  removePrograms: () => set({ programs: null }),
}));
export const applicationsStore = create((set) => ({
  applications: null,
  storeApplications: (applications) => set({ applications: applications }),
  removeApplications: () => set({ applications: null }),
}));
export const studentsStore = create((set) => ({
  students: null,
  storeStudents: (students) => set({ students: students }),
  removeStudents: () => set({ students: null }),
}));
export const useRecruiter = create((set) => ({
  recruiter: { step: "contact" },
  storeRecruiter: (recruiter) => set({ recruiter: recruiter }),
}));
