import { configureStore } from "@reduxjs/toolkit";

import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { attractionApi } from "../services/attraction";
import attractionReducer from "./attraction-slice";
import userSlice from "./userSlice";
import memberSlice from "./memberSlice";

export const store = configureStore({
  reducer: {
    [attractionApi.reducerPath]: attractionApi.reducer,
    attraction: attractionReducer,
    user: userSlice,  
    member: memberSlice,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(attractionApi.middleware),
});

setupListeners(store.dispatch);
