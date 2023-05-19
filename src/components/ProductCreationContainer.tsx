import { FunctionComponent, useState } from 'react';
import Modal from './Modal';
import CreateButton from './CreateButton';
import ProductCreationForm from './ProductCreationForm';
// import { createProductApi } from '../services/product-api.service';
import { addNewProductAction } from '../store/product/product.slice';
import { useDispatch } from 'react-redux';

interface ProductCreationContainerProps {}

const ProductCreationContainer: FunctionComponent<ProductCreationContainerProps> = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const dispatch = useDispatch();
    const handleModalClose = () => {
        setModalVisible(!modalVisible);
    };

    const handleSubmit = (product: any) => {
        // createProductApi(product);
        dispatch(addNewProductAction(product));
        setModalVisible(!modalVisible);
    };

    return (
        <>
            <Modal visible={modalVisible} onClose={handleModalClose}>
                <ProductCreationForm onSubmit={handleSubmit} />
            </Modal>
            <CreateButton onClick={handleModalClose} />
        </>
    );
};

export default ProductCreationContainer;
