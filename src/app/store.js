import { configureStore } from '@reduxjs/toolkit'
import cartSlice from '../features/cartSlice'
import viewSlice from '../features/viewSlice'

export const store = configureStore({
    reducer: {
        allCart: cartSlice,
        view: viewSlice
      },
})