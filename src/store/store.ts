import { configureStore } from "@reduxjs/toolkit";
import tokenreducer, { initial } from "../slices/token.ts";
import { loadState, saveState } from "../utils/localstorage.ts";
import authenticatereducer, { obj } from "../slices/authenticatedornot.ts";
import cartreducer, { initialcartarrayobj } from "../slices/cart.ts";
interface PreloadedState {
  token: initial;
  authenticatedornot: obj;
  cart: initialcartarrayobj[];
}
const preloadedData: PreloadedState = loadState();

export const store = configureStore({
  reducer: {
    token: tokenreducer,
    authenticatedornot: authenticatereducer,
    cart: cartreducer,
  },
  preloadedState: preloadedData,
});
store.subscribe(() => {
  saveState({
    token: store.getState().token,
    authenticatedornot: store.getState().authenticatedornot,
    cart: store.getState().cart,
  });
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
