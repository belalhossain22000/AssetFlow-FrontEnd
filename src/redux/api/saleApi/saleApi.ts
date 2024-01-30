import { baseApi } from "../baseApi";


const saleApi = baseApi.injectEndpoints({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    endpoints: (builder: any) => ({
        saleHistory: builder.query({
            query: () => ({
                url: '/sale/history',
                method: "GET",
            }),
            providesTags: ["shoe"]
        }),
       
    })
})
export const { useSaleHistoryQuery } = saleApi