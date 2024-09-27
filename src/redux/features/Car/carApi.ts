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

        if (args) {
          args.forEach((item: TQueryParam) => {
            params.append(item.name, item.value as string);
          });
        }

        return {
          method: "GET",
          url: "/cars",
          params: params,
        };
      },
      providesTags: ["car"],
    }),
  }),
});


export const {useGetAllCarsQuery} = carApi