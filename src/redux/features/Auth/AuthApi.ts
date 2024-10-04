import { baseApi } from "@/redux/Api/baseApi";

export  const AuthApi = baseApi.injectEndpoints({
    endpoints: (builder) =>({
        signup:builder.mutation({
            query:(data) =>({
                method:"POST",
                url:"/auth/signup",
                body:data,
            })
        }),
        login: builder.mutation({
            query:(data) =>({
                method:"POST",
                url:'/auth/signin',
                body:data,
            })
        })
    })
})


export const {useLoginMutation,useSignupMutation} = AuthApi