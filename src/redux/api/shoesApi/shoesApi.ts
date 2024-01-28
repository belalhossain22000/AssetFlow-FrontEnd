import { baseApi } from "../baseApi";


const shoesApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        shoes: builder.query({
            query: () => ({
                url: '/shoes',
                method: "GET",
            })
        }),
        shoe: builder.query({
            query: (id) => ({
                url: `/shoes/${id}`,
                method: "GET",
            })
        }),
       
        addShoe: builder.mutation({
            query: (shoeInfo) => ({
                url: '/shoes/add-shoes',
                method: "POST",
                body:shoeInfo
            })
        }),

        updateShoe: builder.mutation({
            query: ({shoeInfo,id}) => ({
                url: `/shoes/${id}`,
                method: "PUT",
                body:shoeInfo
            })
        }),

        deleteShoe: builder.mutation({
            query: (id) => ({
                url: `/shoes/${id}`,
                method: "DELETE",
              
            })
        }),
       
    })
})

export const { useShoesQuery,useAddShoeMutation,useDeleteShoeMutation,useShoeQuery } = shoesApi