import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
//Types
type TPost = {
  userId: string;
  id: string;
  title: string;
  body: string;
};

type TPostsState = {
  postsList: TPost[];
  loading: boolean;
  error: string | null;
};
//Typed variables
const initialState: TPostsState = {
  postsList: [],
  loading: false,
  error: null,
};

export const fetchPosts = createAsyncThunk<
  TPost[],
  undefined,
  { rejectValue: string }
>("posts/fetchPosts", async function (_, { rejectWithValue }) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=1`
  );
  if (!response.ok) {
    return rejectWithValue("Error connection to server.");
  }
  const data = await response.json();
  return data;
});

export const addNewPost = createAsyncThunk<TPost, TPost, {rejectValue: string}>(
  "posts/addNewPost",
  async function(newPost, { rejectWithValue }) {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts`,
      {
        method: "POST",
        headers:{
          'Content-Type':'application/json'
        },
        body: JSON.stringify(newPost)
      }
    );
    if (!response.ok) {
      return rejectWithValue('Can not add new post.')
    }
    console.log(JSON.stringify(newPost))
    // return (await response.json()) as TPost; Так правильно, но JSON placeholder возвращает только 101 как id 
    return (newPost) as TPost;
  }
);

const postsSlice = createSlice({
  name: "posts",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.postsList = action.payload;
        state.loading = false;
      })
      .addCase(addNewPost.pending, (state) => {
        state.error = null
      })
      .addCase(addNewPost.fulfilled, (state, action) => {
        state.postsList.push(action.payload);
      })
  },
});

export default postsSlice.reducer;
