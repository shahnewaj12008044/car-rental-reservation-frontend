import { baseApi } from "@/redux/Api/baseApi";

export type TQueryParam = {
  name: string;
  value: boolean | React.Key;
};

const carApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllCars: builder.query({
      //get all products with query
      query: (args) => {
        const params = new URLSearchParams();
        // console.log(args)

        if (args) {
          args.forEach((item: TQueryParam) => {
            params.append(item.name, item.value as string);
          });
        }
        // console.log(params)

        return {
          method: "GET",
          url: "/cars",
          params: params,
        };
      },
      providesTags: ["car"],
    }),
    getSingleCar: builder.query({
      query: (id) => {
        return {
          method: "GET",
          url: `/cars/${id}`,
        };
      },
      providesTags: ["car"],
    }),
    updateCar: builder.mutation({
      query: (payload) => {
        return {
          method: "PUT",
          url: `/cars/${payload.id}`,
          body:payload.data,
        };
      },
      invalidatesTags: ["car"],
    }),
    createCar: builder.mutation({
      query: (data) => {
        return {
          method: "POST",
          url: `/cars`,
          body:data,
        };
      },
      invalidatesTags: ["car"],
    }),
    returnCar: builder.mutation({
      query: (data) => {
        return {
          method: "PUT",
          url: `/bookings/return`,
          body:data,
        };
      },
      invalidatesTags: ["car"],
    }),
  }),
});

export const { useGetAllCarsQuery, useGetSingleCarQuery, useUpdateCarMutation,useCreateCarMutation, useReturnCarMutation } = carApi;
