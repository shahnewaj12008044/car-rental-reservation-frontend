// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export  const baseQuery = fetchBaseQuery({
    baseUrl: "https://car-rental-reservation-nine.vercel.app/api",
  });

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQuery,
  tagTypes:['car','booking','user'],
  endpoints: () => ({}),
});
