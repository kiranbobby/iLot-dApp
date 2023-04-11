import { createSlice } from "@reduxjs/toolkit";

const createAccountModalSlice = createSlice({
  name: "createAccountModalSlice",
  initialState: {
    show: false,
  },
  reducers: {
    showCreateAccountModal: (state) => {
      state.show = true;
    },
    hideCreateAccountModal: (state) => {
      state.show = false;
    },
  },
});

export const { showCreateAccountModal, hideCreateAccountModal } =
  createAccountModalSlice.actions;

export default createAccountModalSlice.reducer;
