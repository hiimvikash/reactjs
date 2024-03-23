# Redux Toolkit : Project Based Learning
[video reference](https://youtu.be/NqzdVN2tyvQ?si=5_qsyCnti-814QHm)

# [Lesson 02 : Post App](https://github.com/hiimvikash/reactjs/tree/main/react15-RTK-DAVE/les02-postApp)
- Work based on `postsSlice.js` initial state
    1. title, content, id
    1. user
    1. time
    1. reactions

## Step 1 : Make a Post APP which takes Tittle & Content and saves it in the Reduxstate.
- Setup `postSlice.js`

```js
import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    title: "Learning Redux Toolkit",
    content: "I've heard good about self learning from YT",
  },
  {
    id: "2",
    title: "Slices...",
    content: "The more I say slice, the more I want pizza",
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
      // any dispatch(addPost()) will go through this method and this method will prepare the payload and then return the payload to reducer.
      prepare(title, content) { 
        return {
          payload: {
            id: nanoid(),
            title,
            content
          },
        };
      },
    },
  }
})

export const { addPost, addReaction } = postsSlice.actions;
export const selectAllPosts = (state)=>state.poo;
export default postsSlice.reducer;
```
- Make a form to add post : `AddPostForm.jsx` whose functionality is like this :-
```js
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const onTitleChanged = e => setTitle(e.target.value)
    const onContentChanged = e => setContent(e.target.value)

    const onSavePostClicked = () => {
        if (title && content) {
            dispatch(addPost(title, content))
            setTitle('')
            setContent('')
        }
    }
```

## Step 2 : Now Implement a dropDown where you can select fixed Author and then Save the post.
- First you need to make a userSlice where you will store your users. : `usersSlice.js`
```js
import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: '0', name: 'Vikash Gupta' },
    { id: '1', name: 'Ashish Gupta' },
    { id: '2', name: 'Dave Gray' }
]

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {}
})

export const selectAllUsers = (state) => state.uus;

export default usersSlice.reducer;
```
- Now a post should also have something to specify that this post is made by particular user, so `prepare()` will receive `userId`.
```js
prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            userId
          },
        };
      },
```
- add author selection dropdown in `AddPostForm.jsx`
```js
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "./postsSlice";

import { selectAllUsers } from "../users/usersSlice";

const AddPostForm = () => {
    const dispatch = useDispatch()

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [userId, setUserId] = useState('') // adding now

    const users = useSelector(selectAllUsers) // adding now

    const onTitleChanged = e => setTitle(e.target.value)
    const onContentChanged = e => setContent(e.target.value)
    const onAuthorChanged = e => setUserId(e.target.value) // adding now

    const onSavePostClicked = () => {
        if (title && content && userId) {
            dispatch(addPost(title, content, userId))
            setTitle('')
            setContent('')
            setUserId('')
        }
    }

    const canSave = Boolean(title) && Boolean(content) && Boolean(userId)

    // adding now
    const usersOptions = users.map(user => (
        <option key={user.id} value={user.id}>
            {user.name}
        </option>
    ))
    return (
        <section>
            <h2>Add a New Post</h2>
            <form>
                <label htmlFor="postTitle">Post Title:</label>
                <input
                    type="text"
                    id="postTitle"
                    name="postTitle"
                    value={title}
                    onChange={onTitleChanged}
                />
                
                <label htmlFor="postContent">Content:</label>
                <textarea
                    id="postContent"
                    name="postContent"
                    value={content}
                    onChange={onContentChanged}
                />
                <label htmlFor="postAuthor">Author:</label>
                // adding now
                <select id="postAuthor" value={userId} onChange={onAuthorChanged}>
                    <option value=""></option>
                    {usersOptions}
                </select>

                <button
                    type="button"
                    onClick={onSavePostClicked}
                    disabled={!canSave}
                >Save Post</button>
            </form>
        </section>
    )
}
export default AddPostForm;
```
## Step 3 : Add Reactions to the post
- see [ReactionButtons.jsx](https://github.com/hiimvikash/reactjs/blob/main/react15-RTK-DAVE/les02-postApp/src/features/posts/ReactionButtons.jsx)
- see [postSlice.js](https://github.com/hiimvikash/reactjs/blob/main/react15-RTK-DAVE/les02-postApp/src/features/posts/postsSlice.js)
- Also see [postList.jsx](https://github.com/hiimvikash/reactjs/blob/main/react15-RTK-DAVE/les02-postApp/src/features/posts/postsList.jsx) that how each post is rendered and `ReactionButtons` components is rendered for each post.


![ss](https://github.com/hiimvikash/reactjs/assets/71629248/276f406e-2e78-4ff8-a243-be88b9cbed2a)

# [Lesson 03 : Post App - API](https://github.com/hiimvikash/reactjs/tree/main/react15-RTK-DAVE/les03-postApp-API/src/features/posts)
# [Lesson 04 :Blog App](https://github.com/hiimvikash/reactjs/tree/main/react15-RTK-DAVE/les04-blogApp-crud)
## When save post is clicked : `onSavePostClicked()`
```js
const onSavePostClicked = () => {
        if (canSave) {
            try {
                // setAddRequestStatus('pending')
                dispatch(addNewPost({ title, body: content, userId })).unwrap()

                setTitle('')
                setContent('')
                setUserId('')
                navigate('/');
            } catch (err) {
                console.error('Failed to save the post', err)
            } finally {
                // setAddRequestStatus('idle')
            }
        }
    }
```
- `postsSlice.js`
```js
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

.addCase(addNewPost.fulfilled, (state, action) => {
    // Fix for API post IDs:
    // Creating sortedPosts & assigning the id 
    // would be not be needed if the fake API 
    // returned accurate new post IDs
    const sortedPosts = state.posts.sort((a, b) => {
        if (a.id > b.id) return 1
        if (a.id < b.id) return -1
        return 0
    })
    action.payload.id = sortedPosts[sortedPosts.length - 1].id + 1;
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
    state.posts.push(action.payload)
})
```
## When Edit Post is saved
```js
    const onSavePostClicked = () => {
        if (canSave) {
            try {
                setRequestStatus('pending')
                dispatch(updatePost({ id: post.id, title, body: content, userId, reactions: post.reactions })).unwrap()

                setTitle('')
                setContent('')
                setUserId('')
                navigate(`/post/${postId}`)
            } catch (err) {
                console.error('Failed to save the post', err)
            } finally {
                setRequestStatus('idle')
            }
        }
    }
```
- `postSlice.js`
```js
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


.addCase(updatePost.fulfilled, (state, action) => {
  if (!action.payload?.id) {
      console.log('Update could not complete')
      console.log(action.payload)
      return;
  }
  const { id } = action.payload;
  action.payload.date = new Date().toISOString();
  const posts = state.posts.filter(post => post.id !== id);
  state.posts = [...posts, action.payload];
})
```
## When delete post is saved 
```js
const onDeletePostClicked = () => {
    try {
        setRequestStatus('pending')
        dispatch(deletePost({ id: post.id })).unwrap()

        setTitle('')
        setContent('')
        setUserId('')
        navigate('/')
    } catch (err) {
        console.error('Failed to delete the post', err)
    } finally {
        setRequestStatus('idle')
    }
}
```
- `postSlice.js`
```js
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


.addCase(deletePost.fulfilled, (state, action) => {
  if (!action.payload?.id) {
      console.log('Delete could not complete')
      console.log(action.payload)
      return;
  }
  const { id } = action.payload;
  const posts = state.posts.filter(post => post.id !== id);
  state.posts = posts;
})
```
