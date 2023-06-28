import { apiSlice } from "../../../../../features/api/apiSlice";

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    counsellorGetAllPartners: builder.query({
      query: (data) => {
        return {
          url: "/counselor/recruitmentPartners",
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
  }),
});

export const { useCounsellorGetAllPartnersQuery } = extendedApiSlice;
// returns the query result object
