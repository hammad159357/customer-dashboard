import { configureStore } from '@reduxjs/toolkit'

import customerSlice from './customerReducer/customerSlice'

export const store = configureStore({
    reducer: {
        customer: customerSlice,
    },
})