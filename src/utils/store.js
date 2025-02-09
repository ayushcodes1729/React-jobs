import {configureStore} from "@reduxjs/toolkit"
import feedReducer from "./feedslice"

const store = configureStore({
    reducer : {
        feed : feedReducer,
    }
});

export default store;