import { apiSlice } from "../../../../features/api/apiSlice";

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    adminGetCounsellors: builder.query({
      query: (data) => {
        return {
          url: "/admin/get/users",
          method: "POST",
          credentials: "include",
          body: data,
        };
      },
      transformResponse: (responseData) => {
        return responseData.counselors;
      },
      providesTags: (result, error, arg) => {
        return [
          { type: "Counsellor", id: "LIST" },
          result.map(({ counselor }) => {
            const _id = counselor._id;
            return { type: "Counsellor", _id };
          }),
        ];
      },
    }),

    adminCreateCounsellor: builder.mutation({
      query: (data) => ({
        url: "/admin/createUser",
        method: "POST",
        credentials: "include",
        body: data,
      }),
      invalidatesTags: [{ type: "Counsellor", id: "LIST" }],
    }),
    adminReassignStudent: builder.mutation({
      query: ({ counsellorId, data }) => ({
        url: `/admin/reassign-student/${counsellorId}`,
        method: "PATCH",
        credentials: "include",
        body: data,
      }),
    }),
    adminReassignPartner: builder.mutation({
      query: ({ counsellorId, data }) => ({
        url: `/admin/reassign-recruitment-partner/${counsellorId}`,
        method: "PATCH",
        credentials: "include",
        body: data,
      }),
    }),
    adminDeleteCounsellor: builder.mutation({
      query: (id) => ({
        url: `/admin/delete/user/${id}`,
        method: "DELETE",
        credentials: "include",
      }),
      invalidatesTags: (result, error, { id: _id }) => {
        return [{ type: "Counsellor", _id }];
      },
    }),
  }),
});

export const {
  useAdminGetCounsellorsQuery,

  useAdminCreateCounsellorMutation,
  useAdminDeleteCounsellorMutation,
  useAdminReassignStudentMutation,
  useAdminReassignPartnerMutation,
} = extendedApiSlice;
// returns the query result object
