import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "user",
  initialState: {
    value: {
      user: {},
      isLogIn: false,
      message: ""
    }
  },
  reducers: {
    setCurrentUser: (state, action) => {
      state.value.user = action.payload;
      state.value.isLogIn = true;
    },
    logOut: (state, action) => {
      state.value.user = {};
      state.value.isLogIn = false;
    },
    setMessage: (state, action) => {
      state.value.message = action.payload;
    },
    emptyMessage: (state, action) => {
      state.value.message = "";
    }
  }
});
export const { setCurrentUser, logOut, setMessage, emptyMessage } = slice.actions;
export default slice.reducer;