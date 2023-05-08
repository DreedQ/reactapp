import { FunctionComponent, useState } from 'react';
import Modal from './Modal';
import CreateButton from './CreateButton';

interface ProductCreationContainerProps {}

const ProductCreationContainer: FunctionComponent<ProductCreationContainerProps> = () => {
    const [showModal, setShowMOdal] = useState(false);

    return (
        <>
            <Modal visible={showModal} toggle={() => setShowMOdal(!showModal)} />
            <CreateButton onClick={() => setShowMOdal(true)} />
        </>
    );
};

export default ProductCreationContainer;
