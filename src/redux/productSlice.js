import { createSlice } from '@reduxjs/toolkit'

export const productSlice = createSlice({
    name: 'products',
    initialState: {
      selectedAge:"ALL"
    },
    reducers:{
        filterAge: (state,action) => {
            state.selectedAge = action.payload
        }

    }
})

export const {filterAge} = productSlice.actions
export const getSelectedAge = state => state.products.selectedAge;
export default productSlice.reducer