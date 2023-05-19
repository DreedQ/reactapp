import { useEffect, useState } from 'react';
import { selectProducts } from '../store/product/product.selectors';
import { fetchProductApi } from '../services/product-api.service';
import { useDispatch, useSelector } from 'react-redux';
import { setProductsAction } from '../store/product/product.slice';
// import { ProductModel } from '../models/product.model';

const useProducts = () => {
    // const [products, setProducts] = useState<ProductModel[]>([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState<number | null>(null);
    const dispatch = useDispatch();
    const products = useSelector(selectProducts);

    async function fetchProducts() {
        try {
            let response = await fetchProductApi().then(res => res.data);
            // setProducts([...response]);
            dispatch(setProductsAction(response));
        } catch (e) {
            setError(`Something went wrong! Error: ${e}`);
        } finally {
            await fetchProductApi().then(res => setLoading(res.status));
        }
    }

    useEffect(() => {
        fetchProducts();
    }, []);
    return { products, loading, error };
};

export default useProducts;
