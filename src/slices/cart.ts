import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
export interface initialcartarrayobj {
  _id: string;
  name: string;
  photo: string;
  price: number;
  stock: number;
  category: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
  incart: number;
}
// interface another{
//   _id: string;
//   name: string;
//   photo: string;
//   price: number;
//   incart: number;
// }
const initialState: initialcartarrayobj[] = [];

export const cartslice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addobj: (state, action: PayloadAction<initialcartarrayobj>) => {
      const found = state.find((e) => {
        return e._id === action.payload._id;
      });
      if (found) {
        found.incart = found.incart + 1;
        console.log(found);
        
        return;
      }
      state.push(action.payload);
    },
    delobj: (state, action: PayloadAction<string>) => {
      const element = state.find((e) => e._id === action.payload);
      if (element) {
        state.splice(state.indexOf(element), 1);
      }
    },
    minusobj: (state, action: PayloadAction<string>) => {
      const element = state.find((e) => e._id === action.payload);
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
