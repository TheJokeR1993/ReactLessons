import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const dogApi = createApi({
  reducerPath: "dogApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dog.ceo/api/",
  }),
  /*   tagTypes: ["mcaProfile"], */
  endpoints: (builder) => ({
    getRandomDog: builder.query({
      query: (countDogs) => ({
        url: `breed/hound/images/random/${countDogs}`,
        method: "GET",
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetRandomDogQuery } = dogApi;
