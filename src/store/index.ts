import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit"
import booksReducer from "./slices/books/booksSlice"

export const store = configureStore({
  reducer: {
    books: booksReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
