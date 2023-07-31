import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api", // optional
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
  tagTypes: [
    "Application",
    "School",
    "Partner",
    "Counsellor",
    "Program",
    "SchoolProgram",
    "Student",
    "AssignStudent",
    "AssignPartner",
    "CounsellorStudent",
    "User",
  ],
  endpoints: (builder) => ({}),
});
