import axios from 'axios'
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getProfessionals = createAsyncThunk('professionals/getProfessionals', async () => {
    try {
        const response = await axios.get('http://localhost:3001/api/professionals')
        const data = response.data.data.sort(function(a, b) {
            if(a.last_name < b.last_name) return -1;
            if(a.last_name > b.last_name) return 1;
            return 0
        })
        return data.map(d => {
            return {
                _id: d._id,
                first_name: d.first_name,
                last_name: d.last_name,
                email: d.email,
                password: d.password,
                dni: d.dni,
                professionalId: d.professionalId,
                country: d.country,
                state: d.state,
                city: d.city,
                zip: d.zip,
                professionalAdress: d.professionalAdress,
                schedule: d.schedule,
                modality: d.modality,
                specialities: d.specialities.name,
                image: d.image
            }
        })
    } catch (error) {
        return error.message
    }        
})

export const getProfessionalById = createAsyncThunk('professionals/getProfessionalById', async (id) => {
    try {
        const response = await axios.get(`http://localhost:3001/api/professionals/${id}`) 
        return response.data.data
    } catch (error) {
        return error.message
    }        
})

export const getSpecialties = createAsyncThunk('professionals/getSpecialties', async () => {       //hay una i adicional en la ruta
    try {
        const response = await axios.get('http://localhost:3001/api/specialities')             
        return response.data.data
    } catch (error) {
        return error.message
    }        
})


export const postProfessional = createAsyncThunk('professionals/postProfessional', async (newProfessional) => {
    try {
        const response = await axios.post('http://localhost:3001/api/professionals', newProfessional)   
        return response.data.data
    } catch (error) {
        return error.message
    }        
})

export const putProfessional = createAsyncThunk('professionals/putProfessional', async (id, professional) => {
    try {
        const response = await axios.put(`http://localhost:3001/api/professionals/${id}`, professional) 
        return response.data.data
    } catch (error) {
        return error.message
    }        
})

export const deleteProfessional = createAsyncThunk('professionals/deleteProfessional', async (professional) => {
    try {
        const response = await axios.delete('http://localhost:3001/api/professionals', professional) 
        return response.data.data
    } catch (error) {
        return error.message
    }        
})