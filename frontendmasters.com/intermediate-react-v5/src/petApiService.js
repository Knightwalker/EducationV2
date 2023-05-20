import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const petApi = createApi({
    reducerPath: "petApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://pets-v2.dev-apis.com/" }),
    endpoints: (builder) => ({
        getPet: builder.query({
            query: id => ({ url: "pets", params: { id } }),
            transformResponse: (response) => response.pets[0]
        }),
        getBreeds: builder.query({
            query: (animal) => ({ url: "breeds", params: { animal: animal } }),
            transformResponse: (response) => response.breeds,
        }),
        search: builder.query({
            query: ({ animal, location, breed }) => ({
                url: "pets",
                params: { animal, location, breed }
            }),
            transformResponse: (response) => response.pets
        })
    })
});

const useGetPetQuery = petApi.useGetPetQuery;
const useGetBreedsQuery = petApi.useGetBreedsQuery
const useSearchQuery = petApi.useSearchQuery

export {
    petApi,
    useGetPetQuery,
    useGetBreedsQuery,
    useSearchQuery
}