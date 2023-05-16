import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Response } from "src/types/Response";
import { sortTypes } from "src/utils/utils";

export const BASE_URL = "https://pokeapi.co/api/v2";

export const pmApi = createApi({
  reducerPath: "pmApi",
  tagTypes: ["Types"],
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}`,
  }),
  endpoints: (builder) => ({
    getTypes: builder.query<PmTypeT[], void>({
      query: () => `/type`,
      providesTags: ["Types"],
      transformResponse: (response: Response<PmTypeT>) =>
        response.results.sort(sortTypes),
    }),
  }),
});

export const { useGetTypesQuery } = pmApi;
