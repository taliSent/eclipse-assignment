import { configureStore } from "@reduxjs/toolkit";
import { pmListReducer } from "./reducer";
import { pmApi } from "../api/useGetTypes";

const store = configureStore({
  reducer: {
    [pmApi.reducerPath]: pmApi.reducer,
    pmListReducer: pmListReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pmApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
