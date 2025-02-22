import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./features/counter/counterSlice";
import postSlice from './features/posts/postsSlice'


const store = configureStore({
    reducer: {
        counter: counterSlice,
        posts: postSlice,
    },
})
export default store