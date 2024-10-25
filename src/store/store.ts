import { arbaSlice } from '@/arba/slices/arbaSlice'
import { configureStore } from '@reduxjs/toolkit'
import { uiSlice } from './slices'

export const store = configureStore({
  reducer: {
    arba: arbaSlice.reducer,
    ui: uiSlice.reducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch