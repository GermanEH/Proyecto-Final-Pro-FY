import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { professionals } from './getProfessionals'

const initialState = {
  success: "",
  status: "",
  error: ""
}

export const postProfesionalSlice = createSlice({
  name: 'postProfesionalSlice',
  initialState: initialState,
  reducers: {
    postPacient: (state, action) => { 
      try {
        const response = axios.post('http://localhost:3001/api/users', action.payload)
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

export const { postPacient } = postPacientSlice.actions