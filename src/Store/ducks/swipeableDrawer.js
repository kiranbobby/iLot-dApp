import { createSlice } from "@reduxjs/toolkit";

const swipeableDrawerSlice = createSlice({
  name: "swipeableDrawerSlice",
  initialState: {
    show: false,
  },
  reducers: {
    showSwipeableDrawer: (state) => {
      state.show = true;
    },
    hideSwipeableDrawer: (state) => {
      state.show = false;
    },
  },
});

export const { showSwipeableDrawer, hideSwipeableDrawer } =
  swipeableDrawerSlice.actions;

export default swipeableDrawerSlice.reducer;
