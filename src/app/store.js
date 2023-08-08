import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../features/api/apiSlice";
import assignStudentsReducer from "../components/dashboard/features/students/assignStudents/assignStudentsSlice";
import assignPartnersReducer from "../components/dashboard/features/partners/assignPartners/assignPartnersSlice";
import counsellorApplicationsTypeReducer from "../components/dashboard/features/applications/counsellorApplications/applicationsTypeSlice";
import counsellorStudentsTypeReducer from "../components/dashboard/features/students/counsellorStudents/studentsTypeSlice";
export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    assignStudents: assignStudentsReducer,
    assignPartners: assignPartnersReducer,
    counsellorApplicationsType: counsellorApplicationsTypeReducer,
    counsellorStudentsType: counsellorStudentsTypeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
