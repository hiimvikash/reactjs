import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define your API slice using createApi
export const apiSlice = createApi({
  reducerPath: 'api', 
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }),
  endpoints: (builder) => ({
    fetchUsers: builder.query({query: () => 'users'})
  }),
});

// Export generated hooks for each endpoint
export const { useFetchUsersQuery } = apiSlice;