import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface initial{
    value:string|null|undefined;
}
const initialState:initial={
    value:null
}
export const tokenslice=createSlice({
    name:"token",
    initialState,
    reducers:{
        setToken:(state,action:PayloadAction<string|null|undefined>)=>{
            state.value=action.payload
        }
    }
})
export const {setToken}=tokenslice.actions
export default tokenslice.reducer