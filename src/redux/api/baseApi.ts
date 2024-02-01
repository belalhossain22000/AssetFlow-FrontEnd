import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";


// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const baseApi:any = createApi({
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://inventory-management-backend-ruby.vercel.app/api',
        prepareHeaders: (headers, { getState }) => {
            const token = (getState() as RootState).auth.token;

            if (token) {
                headers.set('authorization', `${token}`);
            }

            return headers;
        },

    }),
    tagTypes: ['shoe','sell'],
    endpoints: () => ({})
})