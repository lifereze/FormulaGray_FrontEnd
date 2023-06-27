import { apiSlice } from "../../../../../features/api/apiSlice";

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getApplications: builder.query({
      query: (stage) => {
        return {
          url: "/application/rectruitmentPartner/applications",
          method: "POST",
          credentials: "include",
          body: {
            ...stage,
          },
        };
      },
      transformResponse: (responseData) => {
        console.log(responseData);
        return responseData.applications;
      },
      providesTags: (result, error, arg) => {
        console.log(result);
        return [
          { type: "Application", id: "LIST" },
          result.map(({ _id }) => {
            return { type: "Application", _id };
          }),
        ];
      },
    }),

    deleteApplication: builder.mutation({
      query: ({ id }) => ({
        url: `application/recruitmentPartner/delete/${id}`,
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

export const { useGetApplicationsQuery, useDeleteApplicationMutation } =
  extendedApiSlice;
// returns the query result object
