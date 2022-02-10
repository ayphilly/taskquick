import { createSlice } from "@reduxjs/toolkit"

export const orderSlice = createSlice({
  name: 'order',
  initialState: {
    price:0,
    number:1,
    size:''
  },
  reducers: {
    setPrice: (state,action) => {
      state.price = action.payload;
    },
    setNumber: (state, action) => {
     
      if (action.payload ==="decrement"){
        if (state.number === 1){
            state.number = 1;
        } else {
          state.number = state.number - 1
        }
      } else {
        state.number = state.number + 1
      }
    },
    setSize: (state, action) => {
        state.size = action.payload
    }
  },
})

export const { setPrice, setNumber, setSize } = orderSlice.actions

export default orderSlice.reducer