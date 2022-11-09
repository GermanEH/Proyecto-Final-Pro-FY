import { configureStore} from '@reduxjs/toolkit';
import { getPacientsSlice } from '../slices/getPacientsSlice'

export const store = configureStore({
    getPacientsSlice
})