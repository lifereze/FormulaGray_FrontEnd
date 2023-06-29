import { apiSlice } from "../../../../../features/api/apiSlice";

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    adminGetPartnerApplications: builder.query({
      query: ({ id, data }) => {
        return {
          url: `/admin/counselor/applications/${id}`,
          method: "POST",
          credentials: "include",
          body: data,
        };
      },
      transformResponse: (responseData) => {
        return responseData.applications;
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
    adminUpdatePartnerApplication: builder.mutation({
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
    adminDeletePartnerApplication: builder.mutation({
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
  useAdminGetPartnerApplicationsQuery,
  useAdminDeletePartnerApplicationMutation,
  useAdminUpdatePartnerApplicationMutation,
} = extendedApiSlice;
// returns the query result object
