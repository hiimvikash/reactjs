import { createSlice, nanoid, createAsyncThunk, createSelector, createEntityAdapter } from "@reduxjs/toolkit";
import { sub } from "date-fns";

const postsAdapter = createEntityAdapter({sortComparer: (a, b) => b.date.localeCompare(a.date)})

const initialState = postsAdapter.getInitialState({
  status: 'idle', //'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
  count: 0
})

const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';

export const fetchPosts = createAsyncThunk('getme', async () => {
    const response = await fetch(POSTS_URL)
    const responseData = await response.json(); // Await the response.json() method
    return responseData;
})

export const addNewPost = createAsyncThunk('postme', async (initialPost) => {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
      // You can add more headers if needed, like Authorization headers
    },
    body: JSON.stringify(initialPost)
  };

  const response = await fetch(POSTS_URL, requestOptions)
  const responseData = await response.json(); // this will return the initialPost if added sucessfully
  return responseData;
})

export const updatePost = createAsyncThunk('updateme', async (initialPost) => {
  const requestOptions = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
      // You can add more headers if needed, like Authorization headers
    },
    body: JSON.stringify(initialPost)
  };

  const { id } = initialPost;
  try {
    const response = await fetch(`${POSTS_URL}/${id}`, requestOptions)
    const responseData = await response.json(); // Await the response.json() method
    return responseData;
  } catch (error) {
    // return error.message;
    console.log(initialPost)
    return initialPost;
  }
})
export const deletePost = createAsyncThunk('deleteme', async (initialPost) => {
  const requestOptions = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
      // You can add more headers if needed, like Authorization headers
    },
    body: JSON.stringify(initialPost)
  };
  const { id } = initialPost;
  try {
    const response = await fetch(`${POSTS_URL}/${id}`, requestOptions)
    if (response?.status === 200) return initialPost;
        return `${response?.status}: ${response?.statusText}`;
  } catch (error) {
    return error.message;
  }
})



const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addReaction(state, action) {
        const { postId, reaction } = action.payload
        const existingPost = state.entities[postId];
        if (existingPost) {
            existingPost.reactions[reaction]++
        }
    }
  },
  extraReducers(builder) {
    builder
        .addCase(fetchPosts.pending, (state, action) => {
            state.status = 'loading'
        })
        .addCase(fetchPosts.fulfilled, (state, action) => {
            state.status = 'succeeded'
            // Adding date and reactions
            let min = 1;
            const loadedPosts = action.payload.map(post => {
                post.date = sub(new Date(), { minutes: min++ }).toISOString();
                post.reactions = {
                    thumbsUp: 0,
                    wow: 0,
                    heart: 0,
                    rocket: 0,
                    coffee: 0
                }
                return post;
            });

            // Add any fetched posts to the array
            // state.posts = [...loadedPosts]
            postsAdapter.upsertMany(state, loadedPosts);
        })
        .addCase(fetchPosts.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        })

        .addCase(addNewPost.fulfilled, (state, action) => {
          // Fix for API post IDs:
          // Creating sortedPosts & assigning the id 
          // would be not be needed if the fake API 
          // returned accurate new post IDs
          action.payload.id = state.ids[state.ids.length - 1] + 1
          
          // End fix for fake API post IDs 

          action.payload.userId = Number(action.payload.userId)
          action.payload.date = new Date().toISOString();
          action.payload.reactions = {
            thumbsUp: 0,
            wow: 0,
            heart: 0,
            rocket: 0,
            coffee: 0
          }
          // console.log(action.payload)
          // state.posts.push(action.payload)
          postsAdapter.addOne(state, action.payload);
        })


        .addCase(updatePost.fulfilled, (state, action) => {
          if (!action.payload?.id) {
              console.log('Update could not complete')
              console.log(action.payload)
              return;
          }
          const { id } = action.payload;
          action.payload.date = new Date().toISOString();

          // const posts = state.posts.filter(post => post.id !== id);
          // state.posts = [...posts, action.payload];

          postsAdapter.upsertOne(state, action.payload);
        })

        .addCase(deletePost.fulfilled, (state, action) => {
          if (!action.payload?.id) {
              console.log('Delete could not complete')
              console.log(action.payload)
              return;
          }
          const { id } = action.payload;

          // const posts = state.posts.filter(post => post.id !== id);
          // state.posts = posts;

          postsAdapter.removeOne(state, id)
        })
      }
});

// export const selectAllPosts =  (state) => state.poo.posts;
// export const selectPostById = (state, postId) => state.poo.posts.find(post => post.id === postId);

export const {
  selectAll: selectAllPosts,
  selectById: selectPostById,
  // Pass in a selector that returns the posts slice of state
} = postsAdapter.getSelectors(state => state.poo)

export const getPostsStatus = (state) => state.poo.status;
export const getPostsError = (state) => state.poo.error;

export const selectPostsByUser = createSelector(
[selectAllPosts, (state, userId) => userId],
(posts, userId) => posts.filter(post => post.userId === userId)
)

export const { addPost, addReaction } = postsSlice.actions;
export default postsSlice.reducer;
