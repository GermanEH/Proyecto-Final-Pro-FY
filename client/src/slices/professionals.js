import { createSlice  } from '@reduxjs/toolkit'

const initialState = {
  professionals: [],
  filters: [],
  filtered: [],
  status: "",
  error: ""
}

const professionalsSlice = createSlice({
  name: 'professionalsSlice',
  initialState: initialState,
  reducers: {
    handleFilter: (state, action) => {
      if(filters.includes(action.payload.name)) {
        filters.filter(f => f.name !== action.payload)
    } else {
      filters.push(action.payload)
    }
  },
    // filterProfessionals: (state) => {
    //   state.filtered = state.professionals.filter(p => state.filters.every(f => p[Object.keys(f)[0]].includes(Object.values(f)[0])))
    // }  
  },
  extraReducers(builder) {
    builder 
        .addMatcher(
          (action) => action.type.startsWith("professionals/") && action.type.endsWith("/pending"),
          (state, action) => {state.status = 'loading'}
        )
        .addMatcher(
          (action) => action.type.startsWith("professionals/") && action.type.endsWith("/fulfilled"),
          (state, action) => {
            state.status = 'succeeded'
            state.professionals = action.payload
          }
        )
        .addMatcher(
          (action) => action.type.startsWith("professionals/postProfessional"||"professionals/putProfessional") && action.type.endsWith("/fulfilled"),
          (state) => {
            state.status = 'succeeded'
          }
        )
        .addMatcher(
          (action) => action.type.startsWith("professionals/deleteProfessional") && action.type.endsWith("/fulfilled"),
          (state) => {
            state.status = 'succeeded'
            state.professionals = state.professionals.filter(p => p.id !== action.payload.id)
          }
        )
        .addMatcher(
          (action) => action.type.startsWith("professionals/") && action.type.endsWith("/rejected"),
          (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
          }
        )
  }
  // extraReducers(builder) {
  //   builder 
  //       .addCase(getProfessionals.pending, (state, _action) => {
  //           state.status = 'loading'
  //       })
  //       .addCase(getProfessionals.fulfilled, (state, action) => {
  //           state.status = 'succeeded'
  //           console.log(action.payload)
  //           state.professionals = action.payload      
  //       })
  //       .addCase(getProfessionals.rejected, (state, action) => {
  //           state.status = 'failed'
  //           state.error = action.error.message
  //       })
  //     },
  //   extraReducers(builder)    {
  //     builder
  //         .addCase(postProfessional.pending, (state, _action) => {
  //           state.status = 'loading'
  //       })
  //         .addCase(postProfessional.fulfilled, (state, action) => {
  //           state.status = 'succeeded'
  //           state.professionals = action.payload.data.data        //VER QUE HACER CON ESTO
  //       })
  //         .addCase(postProfessional.rejected, (state, action) => {
  //           state.status = 'failed'
  //           state.error = action.error.message
  //       })
  //       }
});

export const professionals = (state) => state.professionals
export const pacientsStatus = (state) => state.status
export const pacientsError = (state) => state.error

export const { handleFilter, filterProfessionals } = professionalsSlice.actions

export default professionalsSlice.reducer