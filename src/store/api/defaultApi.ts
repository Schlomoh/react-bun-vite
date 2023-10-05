import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const defaultApi = createApi({
    reducerPath: 'defaultApi',
    tagTypes: ['default'],
    baseQuery: fetchBaseQuery({baseUrl: 'localhost:3000'}),
    endpoints: builder => ({
        getDefault: builder.query<string, string>({
                query: (name) => `test/${name}`,
                providesTags: ['default']
            }
        ),
        sendDefault: builder.mutation<string, string>({
            query: (name) => `test/${name}`,
            invalidatesTags: ['default']
        }),
    })
})

export default defaultApi
export const {useGetDefaultQuery, useSendDefaultMutation} = defaultApi