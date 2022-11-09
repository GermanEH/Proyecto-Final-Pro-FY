import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { professionals } from './getProfessionals'

const initialState = {
  success: "",
  status: "",
  error: ""
}

export const putProfesionalSlice = createSlice({
  name: 'putProfesionalSlice',
  initialState: initialState,
  reducers: {
    putProfessional: (state, action) => { 
      try {
        const response = axios.put('http://localhost:3001/api/users', action.payload)
        professionals.push(action.payload)
        state.success = response
        return response
      } catch (error) {
          return error.message
      }  
    }
  }
});

// export const postSuccess = (state) => state.sucess
// export const postStatus = (state) => state.status
// export const postError = (state) => state.error

export const { postPacient } = putProfesionalSlice.actions