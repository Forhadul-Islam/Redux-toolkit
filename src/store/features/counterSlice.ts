import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterSlice {
    value: number
}

let initialState : CounterSlice = {
    value: 0
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        //incriment
        increment(state,){
            state.value++;
        },
        //decrement
        decrement(state){
            state.value--;
        }
        //increment by amount
        // incrimentByAmonut(state, action){
        //     state.value += action.payload;
        // }
    }
})

export const {increment, decrement} = counterSlice.actions;
export default counterSlice.reducer;