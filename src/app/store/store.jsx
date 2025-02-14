import { configureStore } from '@reduxjs/toolkit'
import  ExpenseSlice  from '../slices/ExpenseSlice'

export const store = configureStore({
  reducer: {
    expense : ExpenseSlice
  },
})