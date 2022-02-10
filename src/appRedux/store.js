import { configureStore } from "@reduxjs/toolkit"
import  PopupReducer  from "./slices/popup/popup"
import  ImageReducer  from "./slices/image/image"
import  orderReducer  from "./slices/order/order"
export default configureStore({
  reducer: {
      popup: PopupReducer,
      image: ImageReducer,
      order:orderReducer
  },
})