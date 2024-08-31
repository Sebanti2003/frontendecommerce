import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
export interface initialcartarrayobj {
  id: number;
  price: number;
  name: string;
  image: string;
  incart: number;
}
const initialState: initialcartarrayobj[] = [];

export const cartslice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addobj: (state, action: PayloadAction<initialcartarrayobj>) => {
      const found = state.find((e) => {
        return e.id === action.payload.id;
      });
      if (found) {
        found.incart = found.incart + 1;
        return;
      }
      state.push(action.payload);
    },
    delobj: (state, action: PayloadAction<number>) => {
      const element = state.find((e) => e.id === action.payload);
      if (element) {
        state.splice(state.indexOf(element), 1);
      }
    },
    minusobj: (state, action: PayloadAction<number>) => {
      const element = state.find((e) => e.id === action.payload);
      if (!element) {
        return;
      }
      if (element?.incart === 1) {
        state.splice(state.indexOf(element), 1);
      }
      element.incart = element.incart - 1;
    },
  },
});

export const { delobj, addobj, minusobj } = cartslice.actions;

export default cartslice.reducer;
