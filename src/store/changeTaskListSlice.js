import { createSlice } from "@reduxjs/toolkit";

// {
//     todo:[],
//     in_progress:[],
//     done:[]
// }

const changeTaskListSlice = createSlice({
    name: "changeTaskList",
    initialState: JSON.parse(localStorage.getItem("list-of-tasks")) || [
        [[], [], []],
        [[], [], []],
        [[], [], []],
    ],
    reducers: {
        addTask(state, action){
            state[action.payload.status][action.payload.priority].unshift(action.payload);
            
            localStorage.setItem("list-of-tasks", JSON.stringify(state));
        },
        deleteTask(state, action){
            const changedArray = state[action.payload.status][action.payload.priority].filter((task) => {
                return task.id !== action.payload.id;
            });

            state[action.payload.status][action.payload.priority] = changedArray;
            
            localStorage.setItem("list-of-tasks", JSON.stringify(state));
        }
    }
})

export default changeTaskListSlice.reducer;
export const {addTask, deleteTask} = changeTaskListSlice.actions;