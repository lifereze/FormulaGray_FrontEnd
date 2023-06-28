import { apiSlice } from "../../../../../features/api/apiSlice";

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    adminGetAllPartners: builder.query({
      query: (data) => {
        return {
          url: "/admin/get/users",
          method: "POST",
          credentials: "include",
          body: data,
        };
      },
      transformResponse: (responseData) => {
        return responseData.recruitmentPartners;
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
    adminEditPartner: builder.mutation({
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
    adminDeletePartner: builder.mutation({
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
  useAdminGetAllPartnersQuery,
  useAdminEditPartnerMutation,
  useAdminDeletePartnerMutation,
} = extendedApiSlice;
// returns the query result object
