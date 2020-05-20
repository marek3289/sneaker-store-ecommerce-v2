import React from "react";
import styled from 'styled-components';
import { navigate } from 'gatsby';
import { useShoppingCart } from 'use-shopping-cart';

import { CartPreview } from '@components';
import { mixins, media, Button } from '@styles';


const StyledWrapper = styled.div`
    ${mixins.fullSize};
    width: 100%;
`;

const StyledItemList = styled.div`
    padding: 0 15px;
`;

const CartSummary = () => {
    const { totalPrice, cartDetails } = useShoppingCart();

    const cart = [];

    for (const sku in cartDetails) {
        const cartEntry = cartDetails[sku]
        cart.push(cartEntry)
    };

    return (
        <>
                <StyledWrapper>
                    <Button prev arrow onClick={() => navigate('/')}>Back</Button>
                    <h4>Order Summary:</h4>
                    <StyledItemList>
                        {cart.map(item => (
                            <CartPreview checkout key={item.sku} item={item} />
                        ))}
                    </StyledItemList>
                    <h4>Total Price: {totalPrice()}</h4>
                </StyledWrapper>
        </>
    )
};

export default CartSummary;
