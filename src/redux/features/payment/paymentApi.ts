import { baseApi } from "@/redux/Api/baseApi";


const paymentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    payment: builder.mutation({
      query: (data) => ({
        url: "/payment/initiate-payment",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["payment"],
    }),
  }),
});

export const { usePaymentMutation } = paymentApi;
