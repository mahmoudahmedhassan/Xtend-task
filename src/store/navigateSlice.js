import { createSlice } from '@reduxjs/toolkit';

const navigateSlice = createSlice({
    name: 'navigate',
    initialState: {
        value: localStorage.getItem("navigate")? JSON.parse(localStorage.getItem("navigate")) : "DisplayData"
    },
    reducers: {
        navigate: (state, action) => {
             state.value = action.payload
            localStorage.setItem("navigate",JSON.stringify(state.value));
        },
       
    }

})
export const { navigate } = navigateSlice.actions;
export default navigateSlice.reducer;