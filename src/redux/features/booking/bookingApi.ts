import { baseApi } from "@/redux/Api/baseApi";


const bookingApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createBooking: builder.mutation({
      query: (data) => ({
        url: "/bookings",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["booking"],
    }),
    getAllBookings: builder.query({
      query: () => ({
        url: "/bookings",
        method: "GET",
      }),
      providesTags: ["booking"],
    }),
    updateBookings: builder.mutation({
      query: ({ bookingId, ...data }) => ({
        url: `/bookings/${bookingId}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["booking"],
    }),
    getMyBooking: builder.query({
      query: () => ({
        url: "/bookings/my-bookings",
        method: "GET",
      }),
      providesTags: ["booking"],
    }),
    updateMyBooking: builder.mutation({
      query: (payload) => ({
        url: `/bookings/my-booking/${payload?.id}`,
        method: "PUT",
        body: payload?.data,
      }),
      invalidatesTags: ["booking"],
    }),
    getAdminDashboardCount: builder.query({
      query: () => ({
        url: "/booking/dashboard",
        method: "GET",
      }),
      providesTags: ["booking"],
    }),
  }),
});

export const {
  useCreateBookingMutation,
  useGetAllBookingsQuery,
  useUpdateBookingsMutation,
  useGetMyBookingQuery,
  useUpdateMyBookingMutation,
  useGetAdminDashboardCountQuery,
} = bookingApi;
