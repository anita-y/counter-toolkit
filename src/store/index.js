import { configureStore } from "@reduxjs/toolkit";
import privacySlice from "./privacy";
import counterSlice from "./counter";



//map of reducers
const counterStore = configureStore({reducer: {
    counter: counterSlice.reducer,
    privacy: privacySlice.reducer
}});


export default counterStore;
