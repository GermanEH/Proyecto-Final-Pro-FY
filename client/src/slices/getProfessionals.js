import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  professionals: [],
  status: "",
  error: ""
}

export const getProfessionals = createAsyncThunk('getProfessionals', async () => {
  try {
      const response = await axios.get('http://localhost:3001/api/professionals')
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

export const getProfessionalsSlice = createSlice({
  name: 'getProfessionalsSlice',
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder 
        .addCase(getProfessionals.pending, (state, _action) => {
            state.status = 'loading'
        })
        .addCase(getProfessionals.fulfilled, (state, action) => {
            state.status = 'succeeded'
            state.pacients = action.payload
            return action.payload
        })
        .addCase(getProfessionals.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        })
      }
});

// export default state;
//  = (state) => state.professionals
// export const pacientsStatus = (state) => state.status
// export const pacientsError = (state) => state.error