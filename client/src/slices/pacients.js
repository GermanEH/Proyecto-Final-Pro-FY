import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  pacients: [],
  status: "",
  error: ""
}

export const pacientsSlice = createSlice({
  name: 'pacientsSlice',
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder 
        .addMatcher(
          (action) => action.type.startsWith("pacients/") && action.type.endsWith("/pending"),
          (state) => {state.status = 'loading'}
        )
        .addMatcher(
          (action) => action.type.startsWith("pacients/getPacients") && action.type.endsWith("/fulfilled"),
          (state, action) => {
            state.status = 'succeeded'
            state.pacients = action.payload
          }
        )
        .addMatcher(
          (action) => action.type.startsWith("pacients/postPacient"||"pacients/putPacient") && action.type.endsWith("/fulfilled"),
          (state) => {
            state.status = 'succeeded'
          }
        )
        .addMatcher(
          (action) => action.type.startsWith("pacients/deletePacient") && action.type.endsWith("/fulfilled"),
          (state) => {
            state.status = 'succeeded'
            state.pacients = state.pacients.filter(p => p.id !== action.payload.id)
          }
        )
        .addMatcher(
          (action) => action.type.startsWith("pacients/") && action.type.endsWith("/rejected"),
          (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
          }
        )
      }, 
});

export const pacients = (state) => state.pacients
export const pacientsStatus = (state) => state.status
export const pacientsError = (state) => state.error
export const pacientStatus = (state) => state.status
export const pacientError = (state) => state.error

export default pacientsSlice.reducer