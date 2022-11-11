import { createSlice  } from '@reduxjs/toolkit'

const initialState = {
  professionals: [],
  professional: {},
  specialties: [],
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
        if(state.filters.includes(action.payload)) {
          state.filters = state.filters.filter(f => f !== action.payload)
      } else {
        state.filters.push(action.payload)
      }
    },
    setFiltered: (state, action) => {
        state.filtered = action.payload
    },
    filterProfessionals: (state, action) => {
        selectedFilter = []
        for (let i = 0; i < state.specialties.length; i++) {
          for (const prop of i) {
            if(prop[key] === action.payload) selectedFilter = i.name
          }
        }
        state.filtered = state.professionals.filter(p => p.specialtyId === selectedFilter)
    }
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
          (action) => action.type.startsWith("professionals/getProfessionals") && action.type.endsWith("/fulfilled"),
          (state, action) => {
            state.status = 'succeeded'
            state.professionals = action.payload
          }
        )
        .addMatcher(
          (action) => action.type.startsWith("professionals/getSpecialties") && action.type.endsWith("/fulfilled"),
          (state, action) => {
            state.status = 'succeeded'
            state.specialties = action.payload
          }
        )
        .addMatcher(
          (action) => action.type.startsWith("professionals/getProfessional") && action.type.endsWith("/fulfilled"),
          (state, action) => {
            state.status = 'succeeded'
            state.professional = action.payload
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
});

export const professionals = (state) => state.professionals
export const professionalsStatus = (state) => state.status
export const professionalsError = (state) => state.error
export const professional = (state) => state.professional
export const professionalStatus = (state) => state.status
export const professionalError = (state) => state.error

export const { handleFilter, setFiltered, filterProfessionals } = professionalsSlice.actions

export default professionalsSlice.reducer