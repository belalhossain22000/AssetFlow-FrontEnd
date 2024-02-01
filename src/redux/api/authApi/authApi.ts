import { TRegisterUser, TloginUser } from "../../../type/type";
import { baseApi } from "../baseApi";


const authApi = baseApi.injectEndpoints({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    endpoints: (builder:any) => ({
        login: builder.mutation({
            query: (userinfo:TloginUser) => ({
                url: '/auth/login',
                method: "POST",
                body: userinfo
            })
        }),
        register: builder.mutation({
            query: (userinfo:TRegisterUser) => ({
                url: 'auth/register',
                method: "POST",
                body: userinfo
            })
        })
    })
})

export const { useLoginMutation,useRegisterMutation } = authApi