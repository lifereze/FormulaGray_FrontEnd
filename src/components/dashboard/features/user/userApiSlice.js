import { apiSlice } from "../../../../features/api/apiSlice";

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    signUpUser: builder.mutation({
      query: (data) => {
        return {
          url: "/auth/register",
          method: "POST",
          body: data,
          credentials: "include",
        };
      },
      transformResponse: (response) => {
        if (response?.data) {
          return {
            status: "success",
            data: response?.data,
            message: response?.data?.message,
          };
        } else {
          return response;
        }
      },
    }),
    signInUser: builder.mutation({
      query: (data) => {
        return {
          url: "/auth/login",
          method: "POST",
          body: data,
          credentials: "include",
        };
      },
      transformResponse: (response) => {
        return {
          status: "success",
          data: response?.data,
          message: response?.data?.message,
        };
      },
      providesTags: (result, error, arg) => {
        return [
          { type: "User", id: "LIST" },
          result.data(({ _id }) => {
            return { type: "User", _id };
          }),
        ];
      },
    }),
    sendEmailVerificationLink: builder.mutation({
      query: (email) => {
        return {
          url: "/auth/sendEmailVerificationLink",
          method: "POST",
          credentials: "include",
          body: email,
        };
      },
      transformResponse: (responseData) => {
        return responseData;
      },
    }),
    refreshToken: builder.query({
      query: () => {
        return {
          url: "/auth/refreshSession",
          method: "GET",
          credentials: "include",
        };
      },
      transformResponse: (responseData) => {
        return responseData;
      },
    }),
    verifyEmail: builder.mutation({
      query: (token) => {
        return {
          url: "/auth/verifyEmail",
          method: "POST",
          credentials: "include",
          body: token,
        };
      },
      transformResponse: (responseData) => {
        return responseData;
      },
    }),
  }),
});

export const {
  useRefreshTokenQuery,
  useSendEmailVerificationLinkMutation,
  useVerifyEmailMutation,
  useSignUpUserMutation,
  useSignInUserMutation,
} = extendedApiSlice;
// returns the query result object
