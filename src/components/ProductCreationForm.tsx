import { FunctionComponent, memo, useCallback, useState } from 'react';
import Input from './Input';
import { ProductModel } from '../models/product.model';
import ButtonOuter from './ButtonOuter';

interface ProductCreationFormProps {
    onSubmit: (product: Partial<ProductModel>) => void;
}

const ProductCreationForm: FunctionComponent<ProductCreationFormProps> = ({ onSubmit }) => {
    const [product, setProduct] = useState<Partial<ProductModel>>({});

    const changeTitle = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            setProduct({ ...product, title: e.target.value });
        },
        [product]
    );

    const changeDescription = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            setProduct({ ...product, description: e.target.value });
        },
        [product]
    );

    const handleSubmit = useCallback(() => {
        if (!product.title) {
            alert('Please enter a title.');
            return;
        }
        onSubmit(product);
        setProduct({});
    }, [onSubmit, product]);

    return (
        <>
            <Input value={product.title} defaultValue='title' sendInner={changeTitle} />
            <Input value='description' sendInner={changeDescription} />
            <ButtonOuter onClick={handleSubmit}>Create</ButtonOuter>
        </>
    );
};

export default memo(ProductCreationForm);
