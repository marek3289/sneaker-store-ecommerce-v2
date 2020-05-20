import React from "react";
import styled from 'styled-components';
import { navigate } from 'gatsby';
import { useShoppingCart } from 'use-shopping-cart';

import { SEO, CheckoutForm, CartSummary } from '@components';
import { mixins, media} from '@styles';

const StyledWrapper = styled.div`
    ${mixins.sidePadding};
    ${mixins.fullHeight};
    display: flex;

    & > * {  padding: 25px 50px; }

    ${media.bigDesktop`
        & > * {  padding: 15px 15px; }
    `};

    ${media.desktop`
        height: ${mixins.flexColumn};
    `};
`;

// Jeśli nie ma produktów dodać - Your cart is empty 
// osobne utils dla pobierania elementow z koszyka i wstawic je tutaj i w cart

const Checkout = () => {
    const { totalPrice, cartCount } = useShoppingCart();
    const formattedPrice = totalPrice().toString().split(',')[0] * 100;

    return (
        <>
            <SEO title="Checkout" />
            {cartCount <= 0 ? (
                <h1>Your cart is empty</h1>
            ) : (
                <StyledWrapper>
                    <CartSummary />
                    <CheckoutForm price={totalPrice()} value={formattedPrice} onSuccessfulCheckout={() => navigate('/success')} />
                </StyledWrapper>
            )}
        </>
    )
};

export default Checkout;
