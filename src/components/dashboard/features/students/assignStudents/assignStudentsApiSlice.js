import { apiSlice } from "../../../../../features/api/apiSlice";

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    adminGetUnassignedStudents: builder.query({
      query: (id) => {
        return {
          url: "/admin/students/withoutCounselorOrPartner",
          method: "GET",
          credentials: "include",
        };
      },
      transformResponse: (responseData) => {
        return responseData.students;
      },
      providesTags: (result, error, arg) => {
        return [
          { type: "AssignStudent", id: "LIST" },
          result.map(({ _id }) => {
            return { type: "AssignStudent", _id };
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

    adminAssignCounsellorStudent: builder.mutation({
      query: ({ id, data }) => {
        console.log(data);

        return {
          url: `/admin/students/assignCounselor/${id}`,
          method: "POST",
          credentials: "include",
          body: data,
        };
      },
      transformResponse: (responseData) => {
        console.log(responseData);
        return responseData;
      },
      invalidatesTags: [{ type: "AssignStudent", id: "LIST" }],
    }),
  }),
});

export const {
  useAdminGetUnassignedStudentsQuery,
  useAdminGetCounsellorQuery,
  useAdminAssignCounsellorStudentMutation,
} = extendedApiSlice;
// returns the query result object
