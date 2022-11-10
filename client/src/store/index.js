import { configureStore} from '@reduxjs/toolkit';
import { getPacientsSlice } from '../slices/getPacients'

export const store = configureStore({
    reducer: getPacientsSlice
})