import { configureStore} from '@reduxjs/toolkit';
import pacients from '../slices/pacients'
import professionals from '../slices/professionals'

export const store = configureStore({
    reducer: {
        pacients,
        professionals,
    }
})