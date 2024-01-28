import { baseApi } from "../baseApi";


const shoesApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        shoes: builder.query({
            query: () => ({
                url: '/shoes',
                method: "GET",
            })
        }),
       
    })
})

export const { useShoesQuery } = shoesApi