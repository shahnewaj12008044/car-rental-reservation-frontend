import { baseApi } from "@/redux/Api/baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getMyProfile: builder.query({
      query: (id) => ({
        method: "GET",
        url: `/users/profile/${id}`,
      }),
      providesTags: ["user"],
    }),
    updateMyProfile: builder.mutation({
      query: (payload) => ({
        method: "PUT",
        url: `/users/profile/${payload?.id}`,
        body: payload?.userData,
      }),
      invalidatesTags: ["user"],
    }),
    getAllUser: builder.query({
      query: () => ({
        method: "GET",
        url: `/users`,
      }),
      providesTags: ["user"],
    }),
    updateUser: builder.mutation({
      query: (payload) => ({
        method: "PUT",
        url: `/users/${payload?.id}`,
        body: payload?.data,
      }),
      invalidatesTags: ["user"],
    }),
    deleteUser: builder.mutation({
      query: (id) => ({
        method: "DELETE",
        url: `/users/${id}`,
      }),
      invalidatesTags: ["user"],
    }),
  }),
});

export const {
  useGetMyProfileQuery,
  useUpdateMyProfileMutation,
  useGetAllUserQuery,
  useUpdateUserMutation,
  useDeleteUserMutation,
} = userApi;
