import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
}

export const ExpenseSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setFetchData: (state, action) => {
      state.value = [...action.payload]
    },
  },
})

// Action creators are generated for each case reducer function
export const { setFetchData } = ExpenseSlice.actions

export default ExpenseSlice.reducer