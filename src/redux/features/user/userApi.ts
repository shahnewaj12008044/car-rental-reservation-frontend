import { baseApi } from "@/redux/Api/baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getMyProfile: builder.query({
      query: (id) => ({
        method: "GET",
        url: `/users/profile/${id}`,
      }),
      providesTags:['user']
    }),
    updateMyProfile: builder.mutation({
      query: (payload) => ({
        method: "PUT",
        url: `/users/profile/${payload?.id}`,
        body:payload?.userData,
      }),
      invalidatesTags:['user']
    }),
  }),
});

export const { useGetMyProfileQuery,useUpdateMyProfileMutation } = userApi;
