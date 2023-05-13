import { createSlice } from "@reduxjs/toolkit";


const modalSlice = createSlice({
    name: "modal",
    initialState: {
        modalStatus: false,
        changeingTask: null,
    },
    reducers: {
        changeModalStatus(state){
            state.modalStatus = !state.modalStatus;

        },  
        changeingTask(state, action){
            state.changeingTask = action.payload;
        }
    }
})

export default modalSlice.reducer;
export const {changeModalStatus, changeingTask} = modalSlice.actions;