import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";

const initialState = [
  {
    id: "1",
    title: "Learning Redux Toolkit",
    content: "I've heard good about self learning from YT",
    date: sub(new Date(), { minutes: 10 }).toISOString(),
    reactions: {
        thumbsUp: 0,
        wow: 0,
        heart: 0,
        rocket: 0,
        coffee: 0
    }
  },
  {
    id: "2",
    title: "Slices...",
    content: "The more I say slice, the more I want pizza",
    date: sub(new Date(), { minutes: 5 }).toISOString(),
    reactions: {
        thumbsUp: 0,
        wow: 0,
        heart: 0,
        rocket: 0,
        coffee: 0
    }
  },
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            title,
            date: new Date().toISOString(),
            content,
            userId,
            reactions: {
                thumbsUp: 0,
                wow: 0,
                heart: 0,
                rocket: 0,
                coffee: 0
            }
          },
        };
      },
    },

    addReaction(state, action) {
        const { postId, reaction } = action.payload 
        const existingPost = state.find(post => post.id === postId)
        if (existingPost) {
            existingPost.reactions[reaction]++
        }
    }
  },
});
export const { addPost, addReaction } = postsSlice.actions;
export const selectAllPosts = (state)=>state.poo;
export default postsSlice.reducer;
