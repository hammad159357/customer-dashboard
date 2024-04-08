import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    data: [],
}

export const customerSlice = createSlice({
    name: 'customer',
    initialState,
    reducers: {
        setCusomerData: (state, action) => {
            state.data = action.payload
        },
        addCustomer: (state, action) => {
            //To handle Local Storage Data Data
            const storedData = localStorage.getItem('customerData');
            const parsedData = JSON.parse(storedData);
            parsedData.data.push(action.payload);
            localStorage.setItem('customerData', JSON.stringify(parsedData));
            //Redux Update
            state.data.data.push(action.payload)
        },
        editCustomer: (state, action) => {
            //To handle Local Storage Data Data
            const storedData = localStorage.getItem('customerData');
            const parsedData = JSON.parse(storedData);
            const updatedCustomerIndex = state.data.data.findIndex(customer => customer.id === action.payload.id);
            if (updatedCustomerIndex !== -1) {
                parsedData.data[updatedCustomerIndex] = action.payload;
                //Redux Update
                state.data.data[updatedCustomerIndex] = action.payload;
            }
            localStorage.setItem('customerData', JSON.stringify(parsedData));

        },
        deleteCustomer: (state, action) => {
            state.data.data = state.data.data.filter(elem => elem.id !== action.payload);

        },

    },
})

export const { setCusomerData, addCustomer, deleteCustomer, editCustomer } = customerSlice.actions

export default customerSlice.reducer