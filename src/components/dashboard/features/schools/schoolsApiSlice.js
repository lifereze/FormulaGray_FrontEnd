import { apiSlice } from "../../../../features/api/apiSlice";

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllSchools: builder.query({
      query: () => {
        return {
          url: "/school/schools",
          method: "GET",
          credentials: "include",
        };
      },
      transformResponse: (responseData) => {
        return responseData;
      },
      providesTags: (result, error, arg) => {
        console.log(result);
        return [
          { type: "School", id: "LIST" },
          result.map(({ _id }) => {
            console.log(_id);
            return { type: "School", _id };
          }),
        ];
      },
    }),
    getSearchedSchools: builder.query({
      query: (search) => {
        return {
          url: `/school/search`,
          method: "POST",
          credentials: "include",
          body: search,
        };
      },
      transformResponse: (responseData) => {
        return responseData;
      },
      providesTags: (result, error, arg) => {
        console.log(result);
        return [
          { type: "School", id: "LIST" },
          result.map(({ _id }) => {
            console.log(_id);
            return { type: "School", _id };
          }),
        ];
      },
    }),
    getSpecificSchool: builder.query({
      query: (id) => {
        return {
          url: `/school/get/${id}`,
          method: "GET",
          credentials: "include",
        };
      },
      transformResponse: (responseData) => {
        return responseData;
      },
    }),
    adminAddSchool: builder.mutation({
      query: (data) => ({
        url: `/school/create`,
        method: "POST",
        credentials: "include",
        body: data,
      }),
      transformResponse: (responseData) => {
        return responseData.data;
      },
      invalidatesTags: [{ type: "School", id: "LIST" }],
    }),
    adminEditSchool: builder.mutation({
      query: ({ id, data }) => {
        return {
          url: `/admin/edit/school/${id}`,
          method: "PATCH",
          credentials: "include",
          body: data,
        };
      },

      invalidatesTags: (result, error, { id: _id }) => {
        return [{ type: "School", _id }];
      },
    }),
    deleteSchool: builder.mutation({
      query: (id) => ({
        url: `/school/delete/${id}`,
        method: "DELETE",
        credentials: "include",
      }),
      invalidatesTags: (result, error, { id: _id }) => {
        return [{ type: "School", _id }];
      },
    }),
  }),
});

export const {
  useGetAllSchoolsQuery,
  useGetSearchedSchoolsQuery,
  useGetSpecificSchoolQuery,
  useAdminAddSchoolMutation,
  useAdminEditSchoolMutation,
  useDeleteSchoolMutation,
} = extendedApiSlice;
// returns the query result object
