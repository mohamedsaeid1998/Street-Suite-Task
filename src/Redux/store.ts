import { configureStore } from "@reduxjs/toolkit"
import { useDispatch } from "react-redux"
import { MarketApiSlice } from "./Services/Market/MarketSlice"


const store = configureStore({
  reducer: {
    [MarketApiSlice.reducerPath]: MarketApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  }).concat([MarketApiSlice.middleware]),
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
