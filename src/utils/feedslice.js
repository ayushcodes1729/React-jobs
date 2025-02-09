import { createSlice } from "@reduxjs/toolkit";

const initialState = null;
const feedslice = createSlice({
    name : "feed",
    initialState,
    reducers : {
        addFeed(state,action){
            return action.payload;
        },
        removeFeed(state,action){
            const newArray = state.filter((job)=> job._id !==action.payload);
            return newArray;
        }
    }
})

export const {addFeed, removeFeed} = feedslice.actions;
export default feedslice.reducer