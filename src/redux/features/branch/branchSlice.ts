/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  branch: {
    openTime: null,
    closeTime: null,
    isClosed: false,
  },
};
const branchSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    setBranch: (state, action) => {
      const time = action.payload?.branch?.find(
        (data: any) => data?.day === action?.payload?.day
      );

      const data = {
        ...time,
        openTime: parseInt(time?.openTime.substring(0, 2), 10),
        closeTime: parseInt(time?.closeTime.substring(0, 2), 10),
      };
      state.branch = data;
    },
  },
});
export const { setBranch } = branchSlice.actions;
export default branchSlice.reducer;
