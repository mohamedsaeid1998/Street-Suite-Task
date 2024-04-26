import { BASE_URL, MARKET_URLS } from "@/Services/EndPoints/EndPoints";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const MarketApiSlice = createApi({
  reducerPath: "market",
  tagTypes: ["Market"],
  refetchOnReconnect: true,
  refetchOnMountOrArgChange: true,
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    marketList: builder.query({
      query: () => ({
        url: MARKET_URLS.marketData,
      }),
    }),
  }),
})
export const { useMarketListQuery } = MarketApiSlice
