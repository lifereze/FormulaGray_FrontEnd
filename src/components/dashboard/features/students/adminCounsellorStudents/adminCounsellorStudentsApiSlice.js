import { apiSlice } from "../../../../../features/api/apiSlice";

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    adminGetCounsellorStudents: builder.query({
      query: (id) => {
        return {
          url: `/admin/counselor/${id}/users`,
          method: "POST",
          credentials: "include",
          body: {
            role: "student",
          },
        };
      },
      transformResponse: (responseData) => {
        return responseData.students;
      },
      providesTags: (result, error, arg) => {
        return [
          { type: "Student", id: "LIST" },
          result.map(({ _id }) => {
            console.log(_id);
            return { type: "Student", _id };
          }),
        ];
      },
    }),
    adminGetCounsellor: builder.query({
      query: ({ id, data }) => {
        return {
          url: `/admin/get/user/${id}`,
          method: "POST",
          credentials: "include",
          body: data,
        };
      },
      transformResponse: (responseData) => {
        return responseData;
      },
    }),

    adminDeleteCounsellorStudent: builder.mutation({
      query: (id) => ({
        url: `/admin/delete/user/${id}`,
        method: "DELETE",
        credentials: "include",
      }),
      invalidatesTags: (result, error, { id: _id }) => {
        return [{ type: "Student", _id }];
      },
    }),
  }),
});

export const {
  useAdminGetCounsellorStudentsQuery,
  useAdminGetCounsellorQuery,
  useAdminDeleteCounsellorStudentMutation,
} = extendedApiSlice;
// returns the query result object
