import axios from 'axios'
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getProfessionals = createAsyncThunk('professionals/getProfessionals', async () => {
    try {
        const response = await axios.get('http://localhost:3001/api/professionals')
        const data = response.data.data.sort(function(a, b) {
            if(a.name < b.name) return -1;
            if(a.name > b.name) return 1;
            return 0
        })
        return data
    } catch (error) {
        return error.message
    }        
})

export const postProfessional = createAsyncThunk('professionals/postProfessional', async (newProfessional) => {
    try {
        const response = axios.post('http://localhost:3001/api/professionals', newProfessional)   //NO SE PORQUÉ SI PONGO AWAIT NO ANDA
        return response.data.data
    } catch (error) {
        return error.message
    }        
})

export const putProfessional = createAsyncThunk('professionals/postProfessional', async (id, professional) => {
    try {
        const response = axios.put(`http://localhost:3001/api/professionals/${id}`, professional)   //NO SE PORQUÉ SI PONGO AWAIT NO ANDA
        return response.data.data
    } catch (error) {
        return error.message
    }        
})

export const deleteProfessional = createAsyncThunk('professionals/deleteProfessional', async (professional) => {
    try {
        const response = axios.delete('http://localhost:3001/api/professionals', professional)   //NO SE PORQUÉ SI PONGO AWAIT NO ANDA
        return response.data.data
    } catch (error) {
        return error.message
    }        
})