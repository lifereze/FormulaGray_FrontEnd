import { apiSlice } from "../../../../../features/api/apiSlice";

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCounsellorApplications: builder.query({
      query: (stage) => {
        return {
          url: "/counselor/applications",
          method: "POST",
          credentials: "include",
          body: {
            ...stage,
           
          },
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
            return { type: "Application", _id };
          }),
        ];
      },
    }),
    getCounsellorApplicationsForPartners: builder.query({
      query: (stage) => {
        return {
          url: "/counselor/applications",
          method: "POST",
          credentials: "include",
          body: {
            ...stage,
            userType: "partners",
          },
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
            return { type: "Application", _id };
          }),
        ];
      },
    }),
    getCounsellorSpecificPartnerApplications: builder.query({
      query: ({ partnerId, stage }) => {
        return {
          url: `/counselor/applications/${partnerId}`,
          method: "POST",
          credentials: "include",
          body: {
            ...stage,
          },
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
    updateCounsellorApplication: builder.mutation({
      query: ({ id, data }) => ({
        url: `/counselor/application/${id}`,
        method: "PATCH",
        credentials: "include",
        body: data,
      }),

      invalidatesTags: (result, error, { id: _id }) => {
        console.log("id", _id);
        return [{ type: "Application", _id }];
      },
    }),
    deleteCounsellorApplication: builder.mutation({
      query: ({ id }) => ({
        url: `/counselor/application/${id}`,
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
  useGetCounsellorApplicationsQuery,
  useGetCounsellorApplicationsForPartnersQuery,
  useGetCounsellorSpecificPartnerApplicationsQuery,
  useDeleteCounsellorApplicationMutation,
  useUpdateCounsellorApplicationMutation,
} = extendedApiSlice;
// returns the query result object
