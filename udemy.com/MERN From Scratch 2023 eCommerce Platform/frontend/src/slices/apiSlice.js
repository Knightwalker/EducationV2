import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL, PRODUCTS_URL } from "../constants";

export const apiSlice = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    tagTypes: ["Product", "Order", "User"],
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => ({
                url: PRODUCTS_URL
            }),
            keepUnusedDataFor: 5
        })
    })
});

export const { useGetProductsQuery } = apiSlice;