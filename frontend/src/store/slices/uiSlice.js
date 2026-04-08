import { createSlice } from '@reduxjs/toolkit'

const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    activeSection: 'home',
    isNavScrolled: false,
  },
  reducers: {
    setActiveSection: (state, action) => {
      state.activeSection = action.payload
    },
    setNavScrolled: (state, action) => {
      state.isNavScrolled = action.payload
    },
  },
})

export const { setActiveSection, setNavScrolled } = uiSlice.actions
export default uiSlice.reducer
