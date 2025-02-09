import {configureStore} from "@reduxjs/toolkit"
import feedReducer from "./feedslice"
import jobReducer from "./jobSlice"

const store = configureStore({
    reducer : {
        feed : feedReducer,
        job : jobReducer
    }
});

export default store;