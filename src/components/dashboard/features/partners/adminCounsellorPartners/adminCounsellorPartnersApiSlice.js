import { apiSlice } from "../../../../../features/api/apiSlice";

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    adminGetCounsellorPartners: builder.query({
      query: (id) => {
        return {
          url: `/admin/counselor/${id}/partners`,
          method: "GET",
          credentials: "include",
        };
      },
      transformResponse: (responseData) => {
        return responseData.assignedRecruitmentPartners;
      },
      providesTags: (result, error, arg) => {
        return [
          { type: "Partner", id: "LIST" },
          result.map(({ _id }) => {
            console.log(_id);
            return { type: "Partner", _id };
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
    adminEditCounsellorPartner: builder.mutation({
      query: ({ id, data }) => {
        return {
          url: `/admin/edit/user/${id}`,
          method: "PATCH",
          credentials: "include",
          body: data,
        };
      },

      invalidatesTags: (result, error, { id: _id }) => {
        return [{ type: "Partner", _id }];
      },
    }),
    adminDeleteCounsellorPartner: builder.mutation({
      query: (id) => ({
        url: `/admin/delete/user/${id}`,
        method: "DELETE",
        credentials: "include",
      }),
      invalidatesTags: (result, error, { id: _id }) => {
        return [{ type: "Partner", _id }];
      },
    }),
  }),
});

export const {
  useAdminGetCounsellorPartnersQuery,
  useAdminGetCounsellorQuery,
  useAdminEditCounsellorPartnerMutation,
  useAdminDeleteCounsellorPartnerMutation,
} = extendedApiSlice;
// returns the query result object
