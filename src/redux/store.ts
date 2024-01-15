import { configureStore } from "@reduxjs/toolkit";
import busesReducer from "./slices/busesSlice";
import chairsSlice from "./slices/chairsSlice";

const store = configureStore({
  reducer: {
    buses: busesReducer,
    chairs: chairsSlice
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;