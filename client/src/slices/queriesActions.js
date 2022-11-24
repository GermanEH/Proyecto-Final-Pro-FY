import axios from 'axios'
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getQueries = createAsyncThunk('queries/getQueries', async () => {
    try {
        const response = await axios.get('https://api-pro-fy-production.up.railway.app/api/queries')
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
        const response = await axios.get(`https://api-pro-fy-production.up.railway.app/api/queries/${id}`)
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
        const response = await axios.post('https://api-pro-fy-production.up.railway.app/api/queries', newQuery)
        return response.data.data
    } catch (error) {
        return error.message
    }        
})

export const putQuery = createAsyncThunk('queries/putQuery', async ({_id, ...query}) => {
    try {
        const response = await axios.put(`https://api-pro-fy-production.up.railway.app/api/queries/${_id}`, query)
        return response.data.data
    } catch (error) {
        return error.message
    }        
})

export const deleteQuery = createAsyncThunk('queries/deleteQuery', async (id) => {
    try {
        const response = axios.delete(`https://api-pro-fy-production.up.railway.app/api/queries/${id}`) 
        return response.data.data
    } catch (error) {
        return error.message
    }        
})