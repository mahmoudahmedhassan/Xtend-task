import { createSlice } from '@reduxjs/toolkit';
import { notification } from 'antd';

const DisplayDataSlice = createSlice({
    name: 'data',
    initialState: {
        data: localStorage.getItem("data")
        ? JSON.parse(localStorage.getItem("data"))
        :[]
    },
    reducers: {
        data: (state, action) => {
            state.data.push(action.payload)
            // Show notification
            notification.success({
                message: 'Record Added',
                description: 'The new record has been successfully added.',
            });
            localStorage.setItem("data",JSON.stringify(state.data));
         },
        deleteItem: (state, action) => {
            state.data = state.data.filter((item) => item.id !== action.payload)
              // Show notification
            notification.success({
                message: 'Record Deleted',
                description: 'The record has been successfully deleted.',
            });
            localStorage.setItem("data",JSON.stringify(state.data));

        },
        updataItem: (state, action) => {
            state.data = state.data.map((item) => {
                if (item.id === action.payload.id) {
                    return action.payload.updatedItemRecord
                }
                return item
            })
 
   
            localStorage.setItem("data",JSON.stringify(state.data));
        }
    }
})
export const { data,deleteItem ,updataItem} = DisplayDataSlice.actions;
export default DisplayDataSlice.reducer;