import React, { memo, FC } from 'react';
import Wrapper from '../../Wrapper';
import { ProductModel } from '../../../models/product.model';
import styled from 'styled-components';
import { IStyle } from '../../interfaces';
import Description from '../../Description';

type ProductCardProps = {
    product: ProductModel;
};

const ImgStyled = styled.img<IStyle>`
    max-width: 100%;
    max-height: 100%;
`;
const ProductCard: FC<ProductCardProps> = ({ product }) => {
    return (
        <Wrapper
            width='80%'
            min_height='350px'
            border='solid 1px #000'
            border_radius='10px'
            margin='12px'
            padding='5px'
            align='center'
        >
            {' '}
            <Wrapper width='35%' height='350px' align='center' justify='center' margin='0 17px 0 0'>
                <ImgStyled src={product.image} alt='IMG' />
            </Wrapper>
            <Wrapper width='55%' min_height='350px' height='100%' direction='column' justify='flex-start'>
                {' '}
                <Wrapper>
                    <h3>{product.title}</h3>
                </Wrapper>
                <Wrapper height='100%' align='center'>
                    <Description text={product.description} maxLength={100} />
                </Wrapper>
            </Wrapper>
            <Wrapper height='100%' align='flex-end' justify='flex-end' width='10%'>
                <p>{product.price} $</p>
            </Wrapper>
        </Wrapper>
    );
};
export default memo(ProductCard);
