import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoNewsHeaders = {
  'X-RapidAPI-Key': '058b8f38ddmsha8186b3d27d0c1cp11ee6ejsnca727228c499',
  'X-RapidAPI-Host': 'google-news13.p.rapidapi.com',
};

const baseUrl = 'https://google-news13.p.rapidapi.com';

const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });

export const cryptoNewsApi = createApi({
  reducerPath: 'cryptoNewsApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({ newsCategory }) =>
        createRequest(`/search?keyword=${newsCategory}`),
    })
  })
});

export const {
  useGetCryptoNewsQuery
} = cryptoNewsApi;
