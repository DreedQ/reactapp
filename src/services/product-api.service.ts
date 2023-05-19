import axios, { AxiosResponse } from 'axios';
import { PRODUCTS_URL } from '../constants/api.constants';
import { ProductModel } from '../models/product.model';
import { addNewProductAction, setProductsAction } from '../store/product/product.slice';
import { nanoid } from '@reduxjs/toolkit';

export const fetchProductApi = (): Promise<AxiosResponse<ProductModel[]>> => {
    try {
        let response = axios.get(PRODUCTS_URL);
        setProductsAction(response);
    } catch (error) {
        // console.log(error);
    } finally {
        return axios.get(PRODUCTS_URL);
    }
};

export const createProductApi = (product: Partial<ProductModel>) => {
    addNewProductAction({ ...product, id: nanoid() });
};
