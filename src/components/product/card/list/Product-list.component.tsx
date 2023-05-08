import { FC } from 'react';
import { ProductModel } from '../../../../models/product.model';
import ProductCard from '../Product-card';

interface ProductListProps {
    products: Array<ProductModel>;
}

const ProductListComponent: FC<ProductListProps> = ({ products }) => {
    return (
        <>
            {products.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
        </>
    );
};

export default ProductListComponent;
