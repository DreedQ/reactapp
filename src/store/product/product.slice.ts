import { ProductModel } from './../../models/product.model';
import { createSlice } from '@reduxjs/toolkit';

interface IProducts {
    products: ProductModel[];
}

const initialState: IProducts = {
    products: [],
};

export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setProductsAction: (state, action) => {
            state.products = action.payload;
        },
    },
});
export const { setProductsAction } = productSlice.actions;
export default productSlice.reducer;
