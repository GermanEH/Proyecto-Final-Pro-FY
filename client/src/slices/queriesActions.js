import axios from 'axios'
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getQueries = createAsyncThunk('queries/getQueries', async (professionals) => {
    try {
        const response = await axios.get('http://192.168.0.12:3001/api/queries')
        const data = response.data.data.sort(function(a, b) {
            if(a.queryDate < b.queryDate) return -1;
            if(a.queryDate > b.queryDate) return 1;
            return 0
        })
        return data.map(q => {
            return {
                id:q._id,
                doctorName: q.professionals.last_name,
                pacientName: `${q.users.first_name} ${q.users.last_name}`,
                description: q.motive,
                created: q.createdDate,
                date: q.queryDate, 
                state: q.state,
                // isExpanded: false,
            }
        })
    } catch (error) {
        return error.message
    }        
})
export const getQueryById = createAsyncThunk('queries/getQueryById', async (id) => {
    try {
        const response = await axios.get(`http://192.168.0.12:3001/api/queries/${id}`)
        const data = response.data.data.map(q => {
                    return {
                        id:q._id,
                        doctorName: q.professionals.last_name,
                        pacientName: `${q.users.first_name} ${q.users.last_name}`,
                        description: q.motive,
                        created: q.createdDate,
                        date: q.queryDate, 
                        state: q.state,
                        // isExpanded: false,
                    }
            }
        )
        return data[0]
    } catch (error) {
        return error.message
    }        
})

export const postQuery = createAsyncThunk('queries/postQuery', async (newQuery) => {
    try {
        const response = await axios.post('http://192.168.0.12:3001/api/queries', newQuery)   //NO SE PORQUÉ SI PONGO AWAIT NO ANDA
        return response.data.data
    } catch (error) {
        return error.message
    }        
})

export const putQuery = createAsyncThunk('queries/putQuery', async ({_id, ...query}) => {
    try {
        console.log(_id)
        console.log(query)
        const response = await axios.put(`http://192.168.0.12:3001/api/queries/${_id}`, query)   //NO SE PORQUÉ SI PONGO AWAIT NO ANDA
        console.log(response)
        return response.data.data
    } catch (error) {
        return error.message
    }        
})

export const deleteQuery = createAsyncThunk('queries/deleteQuery', async (id) => {
    try {
        const response = axios.delete(`http://192.168.0.12:3001/api/queries/${id}`)   //NO SE PORQUÉ SI PONGO AWAIT NO ANDA
        return response.data.data
    } catch (error) {
        return error.message
    }        
})