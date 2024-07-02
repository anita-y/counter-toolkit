import { createSlice } from "@reduxjs/toolkit";

//slice to slice the store with a reducer
const counterSlice = createSlice({
    name: 'counter',
    initialState: {counterVal:0},
    reducers: {
        //all the operations you are supporting chuncks of methods
        increment: (state) => {
            //toolkit creates copy of state by itself
          return state.counterVal++
        },
        decrement: (state) => {
            state.counterVal--;
        },
        add: (state, action) => {
           state.counterVal += action.payload;
        },
        subs: (state, action) => {
            state.counterVal -= action.payload.toSub;
        }
    }
})

export const counterActions = counterSlice.actions;
export default counterSlice;