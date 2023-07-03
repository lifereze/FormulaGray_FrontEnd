import { apiSlice } from "../../../../../features/api/apiSlice";

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    adminGetUnassignedPartners: builder.query({
      query: (id) => {
        return {
          url: "/admin/recruitmentPartners/withoutCounselor",
          method: "GET",
          credentials: "include",
        };
      },
      transformResponse: (responseData) => {
        return responseData.recruitmentPartners;
      },
      providesTags: (result, error, arg) => {
        return [
          { type: "AssignPartner", id: "LIST" },
          result.map(({ _id }) => {
            return { type: "AssignPartner", _id };
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

    adminAssignCounsellorPartner: builder.mutation({
      query: ({ id, data }) => {
        console.log(data);

        return {
          url: `/admin/recruitmentPartners/assignCounselor/${id}`,
          method: "POST",
          credentials: "include",
          body: data,
        };
      },
      transformResponse: (responseData) => {
        console.log(responseData);
        return responseData;
      },
      invalidatesTags: [{ type: "AssignPartner", id: "LIST" }],
    }),
  }),
});

export const {
  useAdminGetUnassignedPartnersQuery,
  useAdminGetCounsellorQuery,
  useAdminAssignCounsellorPartnerMutation,
} = extendedApiSlice;
// returns the query result object
