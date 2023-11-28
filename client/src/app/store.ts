import { configureStore } from "@reduxjs/toolkit"
import authReducer from '../features/auth/authSlice'
import experienceReducer from '../features/experience/experienceSlice'
import educationReducer from '../features/education/educationSlice'

const store = configureStore({
    reducer: {
        auth: authReducer,
        experience: experienceReducer,
        education: educationReducer
    },
})

export default store
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch