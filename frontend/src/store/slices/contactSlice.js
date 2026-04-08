import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

// Async thunk to send contact form
export const sendContactMessage = createAsyncThunk(
  'contact/sendMessage',
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axios.post('/api/contact', formData)
      return response.data
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Something went wrong')
    }
  }
)

const contactSlice = createSlice({
  name: 'contact',
  initialState: {
    loading: false,
    success: false,
    error: null,
  },
  reducers: {
    resetContactState: (state) => {
      state.loading = false
      state.success = false
      state.error = null
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendContactMessage.pending, (state) => {
        state.loading = true
        state.success = false
        state.error = null
      })
      .addCase(sendContactMessage.fulfilled, (state) => {
        state.loading = false
        state.success = true
      })
      .addCase(sendContactMessage.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
  },
})

export const { resetContactState } = contactSlice.actions
export default contactSlice.reducer
