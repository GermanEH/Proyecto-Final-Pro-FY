import { createSlice } from '@reduxjs/toolkit'
import { axios } from 'axios'

const initialState = {
  pacients: []
}

export const getPacients = createAsyncThunk('pacients/getPacients', async () => {
  try {
      const response = await axios.get('http://localhost:3001/api/users')
      const data = response.data.sort(function(a, b) {
          if(a.name < b.name) return -1;
          if(a.name > b.name) return 1;
          return 0
      })
      return data
  } catch (error) {
      return error.message
  }        
})

export const getPacientsSlice = createSlice({
  name: 'getPacientsSlice',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder 
        .addCase(getPacients.pending, (state, _action) => {
            state.status = 'loading'
        })
        .addCase(getPacients.fulfilled, (state, action) => {
            state.status = 'succeeded'
            state.temperament = action.payload
            return action.payload
        })
        .addCase(getPacients.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        })
      }
});

export const pacients = (state) => state.pacients
export const pacientsStatus = (state) => state.status
export const pacientsError = (state) => state.error