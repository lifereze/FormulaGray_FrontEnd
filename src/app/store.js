import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../features/api/apiSlice";
import assignStudentsReducer from "../components/dashboard/features/students/assignStudents/assignStudentsSlice";
import assignPartnersReducer from "../components/dashboard/features/partners/assignPartners/assignPartnersSlice";
export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    assignStudents: assignStudentsReducer,
    assignPartners: assignPartnersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
