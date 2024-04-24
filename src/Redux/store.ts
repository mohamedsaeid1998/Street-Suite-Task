import { configureStore } from "@reduxjs/toolkit"
import { useDispatch } from "react-redux"


const store = configureStore({
  reducer: {
    // [AuthenticationApiSlice.reducerPath]: AuthenticationApiSlice.reducer,

  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware({
  //   serializableCheck: false
  // }).concat([AuthenticationApiSlice.middleware]),
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
