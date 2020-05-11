import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { mixins, Paragraph, Button } from '@styles';
import { useShoppingCart } from 'use-shopping-cart';

const StyledWrapper = styled.div`
    display: flex;
    border: 1px solid ${({ theme }) => theme.white };
    background-color: ${({ theme }) => theme.gray100 };
    position: relative;
    width: 100%;
`;

const StyledFigure = styled.figure`
    ${mixins.flexCenter};
    min-width: 100px;
    max-width: 100px;
    padding: 10px;

    img {
        width: 100%; 
    }
`;

const StyledDescription = styled.div`
    ${mixins.flexBetween};
    flex-direction: column;
    margin-right: 20px;
    width: 100%;
`;

const StyledFlex = styled.div`
     ${mixins.flexBetween};
     width: 100%;
`;

const StyledQuantity = styled.div`
    ${mixins.flexBetween};
    width: 50px;
`;


const CartPreview = ({ item }) => {
    const { removeCartItem, reduceItemByOne, addItem } = useShoppingCart()
    const { name, sku, formattedValue, image, quantity } = item;

    return(
        <StyledWrapper>
            <Button remove onClick={() => removeCartItem(sku)} />
            <StyledFigure>
                <img alt={name} src={image.src} srcSet={image.srcSet} sizes={image.sizes} />
            </StyledFigure>
            <StyledDescription>
                <Paragraph bold>{name}</Paragraph>
                <StyledFlex>
                    <Paragraph>{formattedValue}</Paragraph>
                    <StyledQuantity>
                        <Button onClick={() => reduceItemByOne(sku)}>-</Button>
                        <Paragraph>{quantity}</Paragraph>
                        <Button onClick={() => addItem(item)}>+</Button>
                    </StyledQuantity>
                </StyledFlex>
            </StyledDescription>
        </StyledWrapper>
    )
}

CartPreview.propTypes = {
    item: PropTypes.shape({
        name: PropTypes.string,
        currency: PropTypes.string,
        price: PropTypes.number,
        sku: PropTypes.string,
        image: PropTypes.object
    }).isRequired
}

export default CartPreview;