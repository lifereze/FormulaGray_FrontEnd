import { apiSlice } from "../../../../../features/api/apiSlice";

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCounsellorStudents: builder.query({
      query: () => {
        return {
          url: "/counselor/students",
          method: "GET",
          credentials: "include",
        };
      },
      transformResponse: (responseData) => {
        return responseData.students;
      },
      providesTags: (result, error, arg) => {
        console.log(result);
        return [
          { type: "CounsellorStudent", id: "LIST" },
          result.map(({ _id }) => {
            return { type: "CounsellorStudent", _id };
          }),
        ];
      },
    }),
    getCounsellorPartnerStudents: builder.query({
      query: (partnerId) => {
        return {
          url: `/counselor/students/${partnerId}`,
          method: "GET",
          credentials: "include",
        };
      },
      transformResponse: (responseData) => {
        return responseData.students;
      },
      providesTags: (result, error, arg) => {
        console.log(result);
        return [
          { type: "CounsellorStudent", id: "LIST" },
          result.map(({ _id }) => {
            return { type: "CounsellorStudent", _id };
          }),
        ];
      },
    }),
    getCounsellorPartner: builder.query({
      query: (partnerId) => {
        return {
          url: `/counselor/recruitmentPartner/${partnerId}`,
          method: "GET",
          credentials: "include",
        };
      },
      transformResponse: (responseData) => {
        return responseData.partner;
      },
    }),
    counsellorAddStudent: builder.mutation({
      query: (data) => ({
        url: `/student/create`,
        method: "POST",
        credentials: "include",
        body: data,
      }),
      transformResponse: (responseData) => {
        return responseData;
      },
      invalidatesTags: [{ type: "CounsellorStudent", id: "LIST" }],
    }),
    // counsellorEditStudent: builder.mutation({
    //   query: ({ id, data }) => {
    //     return {
    //       url: `/admin/edit/school/${id}`,
    //       method: "PATCH",
    //       credentials: "include",
    //       body: data,
    //     };
    //   },

    //   invalidatesTags: (result, error, { id: _id }) => {
    //     return [{ type: "School", _id }];
    //   },
    // }),
    // deleteSchool: builder.mutation({
    //   query: (id) => ({
    //     url: `/school/delete/${id}`,
    //     method: "DELETE",
    //     credentials: "include",
    //   }),
    //   invalidatesTags: (result, error, { id: _id }) => {
    //     return [{ type: "School", _id }];
    //   },
    // }),
  }),
});

export const {
  useGetCounsellorStudentsQuery,
  useGetCounsellorPartnerStudentsQuery,
  useGetCounsellorPartnerQuery,
  useCounsellorAddStudentMutation,
} = extendedApiSlice;
// returns the query result object
