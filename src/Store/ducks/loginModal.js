import { createSlice } from "@reduxjs/toolkit";

const loginModalSlice = createSlice({
  name: "loginModalSlice",
  initialState: {
    show: false,
  },
  reducers: {
    showLoginModal: (state) => {
      state.show = true;
    },
    hideLoginModal: (state) => {
      state.show = false;
    },
  },
});

export const { showLoginModal, hideLoginModal } = loginModalSlice.actions;

export default loginModalSlice.reducer;
