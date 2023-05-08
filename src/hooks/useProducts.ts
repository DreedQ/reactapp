import { useEffect } from 'react';
import { selectProducts } from '../store/product/product.selectors';
import { fetchProductApi } from '../services/product-api.service';
import { useDispatch, useSelector } from 'react-redux';
import { setProductsAction } from '../store/product/product.slice';

const useProducts = () => {
    const dispatch = useDispatch();
    const products = useSelector(selectProducts);

    async function fetchProducts() {
        try {
            let response = await fetchProductApi().then(res => res.data);
            dispatch(setProductsAction(response));
        } catch (err) {
            // console.log(err);
        }
    }

    useEffect(() => {
        fetchProducts();
    }, []);
    return products;
};

export default useProducts;
