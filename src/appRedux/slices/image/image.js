import { createSlice } from "@reduxjs/toolkit"

export const imageSlice = createSlice({
  name: 'image',
  initialState: {
    artwork:{
        value:'',
        price:0
    },
    frame:{
        value:'',
        price:0
    }
  },
  reducers: {
    setArtwork: (state,action) => {
      state.artwork.value = action.payload;
    },
    setFrame: (state, action) => {
      state.frame.value = action.payload
    },
    setFramePrice: (state, action) => {

        state.frame.price = action.payload
    },
    setArtPrice: (state, action) => {

        state.artwork.price = action.payload
    }
  },
})

export const { setArtwork, setFrame, setFramePrice,setArtPrice } = imageSlice.actions

export default imageSlice.reducer