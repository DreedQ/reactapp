import { FC } from 'react';
import ProductListComponent from './Product-list.component';
import useProducts from '../../../../hooks/useProducts';
import ProductCreationContainer from '../../../ProductCreationContainer';

interface ProductListContainerProps {}

const ProductListContainer: FC<ProductListContainerProps> = () => {
    const products = useProducts();

    return (
        <>
            <ProductCreationContainer />
            <ProductListComponent products={products} />
        </>
    );
};

export default ProductListContainer;
