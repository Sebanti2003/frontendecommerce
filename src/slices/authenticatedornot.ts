import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface obj {
  value: boolean;
  role: string;
}

const initialState: obj = {
  value: false,
  role: "user",
};

const authenticatedornot = createSlice({
  name: "authenticatedornot",
  initialState,
  reducers: {
    setauthenticatedornot: (state, action: PayloadAction<boolean>) => {
      state.value = action.payload;
      if (state.value === true) state.role = "admin";
      else state.role = "user";
    },
  },
});

export const { setauthenticatedornot } = authenticatedornot.actions;

export default authenticatedornot.reducer;
