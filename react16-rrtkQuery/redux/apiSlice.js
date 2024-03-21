import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define your API slice using createApi
export const apiSlice = createApi({
  reducerPath: 'api', 
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }),
  endpoints: (builder) => ({
    fetchUsers: builder.query({query: () => 'users', providesTags : ['getUser']}),
    createUser : builder.mutation({query : (userData)=> 
        ({
            url : "users",
            method : 'POST',
            body : userData
        }),
        invalidatesTags : ['getUser']
    })
  }),
});

// Export generated hooks for each endpoint
export const { useFetchUsersQuery, useCreateUserMutation } = apiSlice;