import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    Name: '',
    Discription: '',
    Cover_photoes: [],
    Price: ''

}

const ProductSlice = createSlice({
    name: "Product",
    initialState,
    reducers: {
        SetName(state, action) {
            state.Name = action.payload
        },
        SetDiscription(state, action) {
            state.Discription = action.payload
        },
        SetCover_photoes(state, action) {
            state.Cover_photoes.push(action.payload)
        },
        SetPrice(state, action) {
            state.Price = action.payload
        }
    }
})

export const { SetName, SetDiscription, SetPrice, SetCover_photoes } = ProductSlice.actions;
export default ProductSlice.reducer;