import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import userReducer from "./features/userSlice";
import searchReducer from "./features/searchSlice"; 
import bookingReducer from "./features/bookingSlice";
import { api } from "./api"; 

export const store = configureStore({
  reducer: {
    user: userReducer, 
    [api.reducerPath]: api.reducer,
    search: searchReducer,
    booking: bookingReducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>  
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(api.middleware),
});

setupListeners(store.dispatch);
