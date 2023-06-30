import { apiSlice } from "../../../../features/api/apiSlice";

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllPrograms: builder.query({
      query: (page = 1, pageSize = 10) => {
        return {
          url: `/programme/programmes?pageNum=${page}&pageSize=${pageSize}`,
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
          { type: "Program", id: "LIST" },
          result.programmes.map(({ _id }) => {
            console.log(_id);
            return { type: "Program", _id };
          }),
        ];
      },
    }),
    getSchoolPrograms: builder.query({
      query: (id) => {
        return {
          url: `/programme/schoolProgrammes/${id}`,
          method: "GET",
          credentials: "include",
        };
      },
      transformResponse: (responseData) => {
        return responseData;
      },
      providesTags: (result, error, arg) => {
        return [
          { type: "SchoolProgram", id: "LIST" },
          result.map(({ _id }) => {
            console.log(_id);
            return { type: "SchoolProgram", _id };
          }),
        ];
      },
    }),
    getSearchedPrograms: builder.query({
      query: (search) => {
        return {
          url: "/programme/search",
          method: "POST",
          credentials: "include",
          body: search,
        };
      },
      transformResponse: (responseData) => {
        return responseData;
      },
      providesTags: (result, error, arg) => {
        return [
          { type: "Program", id: "LIST" },
          result.map(({ _id }) => {
            console.log(_id);
            return { type: "Program", _id };
          }),
        ];
      },
    }),
    getFilteredPrograms: builder.query({
      query: (data) => {
        return {
          url: "/programme/filter",
          method: "POST",
          credentials: "include",
          body: data,
        };
      },
      transformResponse: (responseData) => {
        return responseData;
      },
      providesTags: (result, error, arg) => {
        return [
          { type: "Program", id: "LIST" },
          result.map(({ _id }) => {
            return { type: "Program", _id };
          }),
        ];
      },
    }),
    getSpecificProgram: builder.query({
      query: (id) => {
        return {
          url: `/programme/get/${id}`,
          method: "GET",
          credentials: "include",
        };
      },
      transformResponse: (responseData) => {
        return responseData[0];
      },
    }),

    adminAddProgram: builder.mutation({
      query: (data) => ({
        url: `/programme/create`,
        method: "POST",
        credentials: "include",
        body: data,
      }),
      transformResponse: (responseData) => {
        return responseData;
      },
      invalidatesTags: [{ type: "Program", id: "LIST" }],
    }),
    adminEditProgram: builder.mutation({
      query: ({ id, data }) => {
        return {
          url: `/programme/edit/${id}`,
          method: "PATCH",
          credentials: "include",
          body: data,
        };
      },

      invalidatesTags: (result, error, { id: _id }) => {
        return [{ type: "Program", _id }];
      },
    }),
    deleteProgram: builder.mutation({
      query: (id) => ({
        url: `/programme/delete/${id}`,
        method: "DELETE",
        credentials: "include",
      }),
      invalidatesTags: (result, error, { id: _id }) => {
        return [{ type: "Program", _id }];
      },
    }),
  }),
});

export const {
  useGetAllProgramsQuery,
  useGetSchoolProgramsQuery,
  useGetSearchedProgramsQuery,
  useGetFilteredProgramsQuery,
  useGetSpecificProgramQuery,
  useAdminAddProgramMutation,
  useAdminEditProgramMutation,
  useDeleteProgramMutation,
} = extendedApiSlice;
// returns the query result object
