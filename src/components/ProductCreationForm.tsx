import { FunctionComponent } from 'react';
import Input from './Input';
import { ProductModel } from '../models/product.model';
import ButtonOuter from './ButtonOuter';

interface ProductCreationFormProps {
    onSubmit: (product: Partial<ProductModel>) => void;
}

const ProductCreationForm: FunctionComponent<ProductCreationFormProps> = ({}) => {
    const onSubmit = () => {
        // handleSubmit();
        let product = {
            title: 'title',
        };
    };
    return (
        <form>
            <Input value='title'></Input>
            <Input value='description'></Input>
            {/* <Input >Create</Input> */}
            <ButtonOuter onClick={onSubmit}>Create</ButtonOuter>
        </form>
    );
};

export default ProductCreationForm;
