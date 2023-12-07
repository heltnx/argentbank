import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/api/v1/user' }),
    endpoints: (builder) => ({
        login: builder.query({
            query: ({ email, password }) => ({
                url: "/login",
                method: "POST",
                body: { email, password },
                headers: {
                    "Content-Type": "application/json",
                },
            }),
        }),
    }),
});

export const { useLoginQuery } = userApi;