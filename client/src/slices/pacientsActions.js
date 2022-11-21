import axios from 'axios'
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getPacients = createAsyncThunk('pacients/getPacients', async () => {
    try {
        const response = await axios.get('http://192.168.0.12:3001/api/users')
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

export const getPacient = createAsyncThunk('pacients/getPacient', async (id) => {
    try {
        const response = await axios.get(`http://192.168.0.12:3001/api/users/${id}`)
        return response.data.data
    } catch (error) {
        return error.message
    }        
})

export const postPacient = createAsyncThunk('pacients/postPacient', async (newPacient) => {
    try {
        // para probar en mobile, cambiar localhost:3001 por ip_computador:3001
        const response = await axios({
            method: "post",
            url: "http://192.168.168.117:3001/api/users",
            data: newPacient,
        });
        return response.data.data
    } catch (error) {
        console.log('error', error);
        return error.message
    }        
})

export const putPacient = createAsyncThunk('pacients/putPacient', async ({_id, ...pacient}) => {
    try {
        const response = await axios.put(`http://192.168.0.12/api/users/${_id}`, pacient)      //NO SE PORQUÉ SI PONGO AWAIT NO ANDA (EN PROF, ACÁ NO SE)
        return response.data.data
    } catch (error) {
        return error.message
    }        
})

export const deletePacient = createAsyncThunk('pacients/deletePacient', async (id) => {
    try {
        const response = await axios.delete(`http://192.168.0.12/api/users/${id}`)      //NO SE PORQUÉ SI PONGO AWAIT NO ANDA (EN PROF, ACÁ NO SE)
        return response.data.data
    } catch (error) {
        return error.message
    }        
})