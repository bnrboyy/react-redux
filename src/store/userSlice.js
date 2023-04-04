import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "Hello Redux/toolkit",
  user: [],
  loading: false,
};

export const userSlice = createSlice({
  name: "userStore",
  initialState,
  reducers: {
    login: (state, action) => {
      state.value = "Hello Login";
      state.user = action.payload;
      state.loading = true;
    },
    logout: (state) => {
      state.value = "Goodbye Logout";
      state.loading = false;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
