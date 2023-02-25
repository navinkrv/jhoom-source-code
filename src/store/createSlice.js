import { createSlice } from "@reduxjs/toolkit";

const playQueueSlice=createSlice({
    name:"playQueue",
    initialState:[],
    reducers:{
        addQueue(state,action){
            state.pop()
            state.push(action.payload)
        },
        removeSong(state,action){
            state=state.filter((item)=>item.title !== action.payload.title)
        },
        clearQueue:()=>{},
    },
})
export const {addQueue,removeSong} = playQueueSlice.actions;
export default playQueueSlice.reducer;