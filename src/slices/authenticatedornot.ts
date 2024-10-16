import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
// import { actions } from "react-table";

export interface obj {
  value: string;
  auth: boolean;
  role: string;
}

const initialState: obj = {
  value: "",
  auth: false,
  role: "",
};

const authenticatedornot = createSlice({
  name: "authenticatedornot",
  initialState,
  reducers: {
    setauthenticatedornot: (
      state,
      action: PayloadAction<{ role: string; value: string }>
    ) => {
      state.value = action.payload.value;
      state.role = action.payload.role;
      if (!state.value) {
        state.auth = false;
      } else {
        state.auth = true;
      }
    },
    logout:(state,action:PayloadAction<null>)=>{
        state.value=action.payload||"";
        state.auth=false;
        state.role="";
    }
  },
});

export const { setauthenticatedornot,logout } = authenticatedornot.actions;

export default authenticatedornot.reducer;
