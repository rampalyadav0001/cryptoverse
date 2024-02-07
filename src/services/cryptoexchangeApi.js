import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoExchangeHeaders = {
    'X-RapidAPI-Key': '058b8f38ddmsha8186b3d27d0c1cp11ee6ejsnca727228c499',
    'X-RapidAPI-Host': 'coingecko.p.rapidapi.com'
};

const baseUrl = 'https://coingecko.p.rapidapi.com';

const createRequest = (url) => ({ url, headers: cryptoExchangeHeaders });

export const cryptoExchangeApi = createApi({
  reducerPath: 'cryptoExchangeApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getExchanges: builder.query({
      query: () =>
        createRequest(`/exchanges`),
    })
  })
});

export const {
    useGetExchangesQuery
} = cryptoExchangeApi;
