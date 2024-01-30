
import { SaleItem } from "../../../type/type";
import { baseApi } from "../baseApi";


const sellApi = baseApi.injectEndpoints({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    endpoints: (builder: any) => ({
        sellShoe: builder.mutation({
            query: (sellInfo:SaleItem) => ({
                url: '/sale',
                method: "POST",
                body:sellInfo
            }),
            invalidatesTags: ["sell"]
        }),

    })
})

export const { useSellShoeMutation } = sellApi