import { createSlice, createEntityAdapter, current } from '@reduxjs/toolkit'

const initialState = {
  professionals: [],
  professional: {},
  specialties: [],
  specialtiesNames: [],
  countries: [],
  filtered: [],
  status: "",
  error: ""
}

const filtersAdapter = createEntityAdapter()
const filtersSelectors = filtersAdapter.getSelectors(state => state.filters)

const professionalsSlice = createSlice({
  name: 'professionalsSlice',
  initialState: initialState,
  reducers: {
    setFiltered: (state, action) => {
      state.filtered = action.payload
    },
    equalFilters: (state, action) => {
      state.filters = action.payload
    },
    replaceFilters: (state, action) => {
      const filter = state.filters.find(filter => Object.keys(filter)[0] === Object.keys(action.payload)[0])
      if(filter) {
        filter = action.payload
      }
    },
    filterProfessionals: (state, {payload}) => {
      state.filtered = state.professionals.filter(p => payload.every(f => p[Object.keys(f)[0]] === Object.values(f)[0]))
    }  
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
            const totalBdCountries = action.payload.map(p => p.country)
            state.countries = [...new Set(totalBdCountries)]
          }
        )
        .addMatcher(
          (action) => action.type.startsWith("professionals/getSpecialties") && action.type.endsWith("/fulfilled"),
          (state, action) => {
            state.status = 'succeeded'
            state.specialties = action.payload
            state.specialtiesNames = action.payload.map(s => s.name)
          }
        )
        .addMatcher(
          (action) => action.type.startsWith("professionals/getProfessionalById") && action.type.endsWith("/fulfilled"),
          (state, action) => {
            state.status = 'succeeded'
            state.professional = action.payload
          }
        )
        .addMatcher(
          (action) => action.type.startsWith("professionals/postProfessional") && action.type.endsWith("/fulfilled"),
          (state, action) => {
            state.status = 'succeeded'
            state.professionals = action.payload
          }
        )
        .addMatcher(
          (action) => action.type.startsWith("professionals/putProfessional") && action.type.endsWith("/fulfilled"),
          (state, action) => {
            state.status = 'succeeded'
            const oldProf = state.professionals.find(action.payload._id)
            state.professionals = state.professionals.filter (p => p._id !== oldProf)
            state.professionals = state.professionals.push(action.payload)
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

export const { equalFilters, replaceFilters, setFiltered, filterProfessionals } = professionalsSlice.actions

export default professionalsSlice.reducer