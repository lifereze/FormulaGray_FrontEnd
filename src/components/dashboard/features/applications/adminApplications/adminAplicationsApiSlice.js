import { apiSlice } from "../../../../../features/api/apiSlice";

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getApplications: builder.query({
      query: (stage) => {
        return {
          url: "/admin/get/applications",
          method: "POST",
          credentials: "include",
          body: {
            ...stage,
          },
        };
      },
      transformResponse: (responseData) => {
        return responseData;
      },
      providesTags: (result, error, arg) => {
        console.log(result);
        return [
          { type: "Application", id: "LIST" },
          result.map(({ _id }) => {
            console.log(_id);
            return { type: "Application", _id };
          }),
        ];
      },
    }),
    updateAdminApplication: builder.mutation({
      query: ({ id, data }) => ({
        url: `/admin/edit/application/${id}`,
        method: "PATCH",
        credentials: "include",
        body: data,
      }),
      invalidatesTags: (result, error, { id: _id }) => {
        console.log("id", _id);
        return [{ type: "Application", _id }];
      },
    }),
    deleteApplication: builder.mutation({
      query: ({ id }) => ({
        url: `admin/delete/application/${id}`,
        method: "DELETE",
        credentials: "include",
      }),
      invalidatesTags: (result, error, { id: _id }) => {
        console.log("id", _id);
        return [{ type: "Application", _id }];
      },
    }),
  }),
});

export const {
  useGetApplicationsQuery,
  useDeleteApplicationMutation,
  useUpdateAdminApplicationMutation,
} = extendedApiSlice;
// returns the query result object
