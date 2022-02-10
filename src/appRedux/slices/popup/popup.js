import { createSlice } from '@reduxjs/toolkit'

export const popupSlice = createSlice({
  name: 'popup',
  initialState: {
    value: false,
  },
  reducers: {
    open: (state,action) => {
      state.value = true;
    },
    close: (state) => {
      state.value = false
    }
  },
})

export const { open,close } = popupSlice.actions

export default popupSlice.reducer