import { TShoes } from "../../../type/shoe.type";
import { baseApi } from "../baseApi";


const shoesApi = baseApi.injectEndpoints({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    endpoints: (builder: any) => ({
        shoes: builder.query({
            query: () => ({
                url: '/shoes',
                method: "GET",
            }),
            providesTags: ["shoe"]
        }),
        shoe: builder.query({
            query: (id: string) => ({
                url: `/shoes/${id}`,
                method: "GET",
            })
        }),

        addShoe: builder.mutation({
            query: (shoeInfo: TShoes) => ({
                url: '/shoes/add-shoes',
                method: "POST",
                body: shoeInfo
            }),
            invalidatesTags: ['shoe']
        }),

        updateShoe: builder.mutation({
            query: ({ shoeInfo, id }: { shoeInfo: TShoes; id: string }) => {
             

                return ({
                    url: `/shoes/update/${id}`,
                    method: "PUT",
                    body: shoeInfo
                })
            },
            invalidatesTags: ['shoe']
        }),

        deleteShoe: builder.mutation({
            query: (id: string) => ({
                url: `/shoes/delete/${id}`,
                method: "DELETE",

            }),
            invalidatesTags: ['shoe']
        }),

        bulkDeleteShoe: builder.mutation({
            query: (ids: string[]) => ({
                url: `shoes/bulk-delete`,
                method: "DELETE",
                body:ids

            }),
            invalidatesTags: ['shoe']
        }),

    })
})

export const { useShoesQuery, useAddShoeMutation, useDeleteShoeMutation, useShoeQuery, useUpdateShoeMutation,useBulkDeleteShoeMutation } = shoesApi