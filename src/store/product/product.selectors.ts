import { ProductModel } from '../../models/product.model';
import { RootState } from './../store';

interface ProductStateModel {
    products: ProductModel[];
}

const selectProductState: (state: RootState) => ProductStateModel = (state: RootState) => state.products;

export const selectProducts = (state: RootState) => selectProductState(state).products;
