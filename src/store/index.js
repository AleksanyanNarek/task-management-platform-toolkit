import { combineReducers, configureStore } from "@reduxjs/toolkit";
import changeTaskListSlice from "./changeTaskListSlice";
import modalSilce from "./modalSilce";


const rootReducer = combineReducers({
    tasksList: changeTaskListSlice,
    modal: modalSilce
})

export const store = configureStore({
    reducer: rootReducer
})