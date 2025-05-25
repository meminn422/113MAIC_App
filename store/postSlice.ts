import { Post } from '@/types/post';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PostState {
  posts: Post[];
}

const initialState: PostState = {
  posts: [],
};

const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setPosts(state, action: PayloadAction<Post[]>) {
      state.posts = action.payload;
    },
    addPost(state, action: PayloadAction<Post>) {
      state.posts.unshift(action.payload);
    },
  },
});

export const { setPosts, addPost } = postSlice.actions;
export default postSlice.reducer;
