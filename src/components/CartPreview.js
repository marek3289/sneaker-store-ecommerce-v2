import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import { mixins, Paragraph, Button } from '@styles';
import { useShoppingCart, formatCurrencyString } from 'use-shopping-cart';

const StyledWrapper = styled.div`
    display: flex;
    width: 100%;

    ${ ({ checkout }) => (
	    !checkout && css`
            border: 1px solid ${({ theme }) => theme.white };
            background-color: ${({ theme }) => theme.gray100 };
            position: relative;
	    `
	)}
`;

const StyledFigure = styled.figure`
    ${mixins.flexCenter};
    min-width: 100px;
    max-width: 100px;
    padding: 5px 10px;
    width: ${({ checkout }) => checkout && '100px' };

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

     p {
        margin: 5px;
    }
`;

const StyledQuantity = styled.div`
    ${mixins.flexBetween};
    width: 50px;
`;

const CartPreview = ({ checkout, item }) => {
    const { removeCartItem, reduceItemByOne, addItem } = useShoppingCart()
    const { name, sku, formattedValue, image, quantity, price, currency } = item;

    const formattedPrice = formatCurrencyString({
        value: price,
        currency,
        language: 'en',
    });

    return(
        <StyledWrapper checkout={checkout}>
            {!checkout && <Button remove onClick={() => removeCartItem(sku)} />}
            <StyledFigure checkout={checkout}>
                <img alt={name} src={image.src} srcSet={image.srcSet} sizes={image.sizes} />
            </StyledFigure>
            <StyledDescription>
                {checkout ? (
                    <>
                        <StyledFlex>
                            <Paragraph medium bold>{name}</Paragraph>
                            <Paragraph medium bold>{formattedValue}</Paragraph>
                        </StyledFlex>
                        <StyledFlex>
                            <Paragraph gray>Quantity: {quantity}</Paragraph>
                            {quantity > 1 && <Paragraph gray>{formattedPrice} per item</Paragraph>}
                        </StyledFlex>
                    </>
                ) : (
                    <>
                        <Paragraph bold>{name}</Paragraph>
                        <StyledFlex>
                            <Paragraph>{formattedValue}</Paragraph>
                            <StyledQuantity>
                                <Button onClick={() => reduceItemByOne(sku)}>-</Button>
                                <Paragraph>{quantity}</Paragraph>
                                <Button onClick={() => addItem(item)}>+</Button>
                            </StyledQuantity>
                        </StyledFlex>
                    </>
                )}
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
    }).isRequired,
    checkout: PropTypes.bool
}

CartPreview.defaultProps = {
    checkout: false
}

export default CartPreview;