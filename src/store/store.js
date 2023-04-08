import { configureStore } from "@reduxjs/toolkit";

import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { attractionApi } from "../services/attraction";
import attractionReducer from "./attraction-slice";
import userSlice from "./userSlice";
import memberSlice from "./memberSlice";
import movieSlice from "./movieSlice";
import usersSlice from "./usersSlice";

export const store = configureStore({
  reducer: {
    [attractionApi.reducerPath]: attractionApi.reducer,
    attraction: attractionReducer,
    user: userSlice,  
    member: memberSlice,
    movies: movieSlice,
    users: usersSlice,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(attractionApi.middleware),
});

setupListeners(store.dispatch);
