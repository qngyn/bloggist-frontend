import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../slices/users/userSlices";
import postsReducer from "../slices/posts/postsSlices";
import categoriesReducer from "../slices/categories/categoriesSlice";
import commentReducer from "../slices/comments/commentSlice";

//store
const store = configureStore({
    reducer: {
        users: usersReducer,
        posts: postsReducer,
        categories: categoriesReducer,
        comments: commentReducer,
    },
});

export default store;