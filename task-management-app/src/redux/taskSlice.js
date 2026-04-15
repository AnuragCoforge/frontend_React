import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    tasks:[]
}

const taskSlice = createSlice({
    name:"task", initialState,
    reducers:{
        AddTask:(state, action)=>{
            state.tasks.push(action.payload)
        },
        ChangeTaskStatus:(state, action)=>{
            const{id, status} = action.payload
            const task = state.tasks.find((t)=> t.id === id)

            if(task) {
                task.status = status
            }
        }
    }
})

export const {AddTask, ChangeTaskStatus} = taskSlice.actions
const taskReducer = taskSlice.reducer
export default taskReducer