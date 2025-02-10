import { createSlice } from "@reduxjs/toolkit";

const initialState = null
const jobSlice = createSlice({
    name: "job",
    initialState,
    reducers : {
        addJob(state,action){
            return action.payload;
        },
        removeJob(state,action){
            return null
        }
    }
})

export const {addJob, removeJob} = jobSlice.actions;
export default jobSlice.reducer