import { baseApi } from "../baseApi";


const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (userinfo) => ({
                url: '/auth/login',
                method: "POST",
                body: userinfo
            })
        }),
        register: builder.mutation({
            query: (userinfo) => ({
                url: 'auth/register',
                method: "POST",
                body: userinfo
            })
        })
    })
})

export const { useLoginMutation,useRegisterMutation } = authApi