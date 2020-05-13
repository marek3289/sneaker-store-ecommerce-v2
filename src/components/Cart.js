import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { CartPreview } from '@components';
import { useShoppingCart } from 'use-shopping-cart';
import { mixins, Paragraph, Button } from '@styles';

const StyledWrapper = styled.div`
    position: fixed;
    padding: 15px 10px 10px;
    top: 0;
    right: 0;
    width: 300px;
    height: 100%;
    background-color: ${({ theme }) => theme.white };
    border: 1px solid ${({ theme }) => theme.gray200 };
    opacity: ${({ isOpen }) => isOpen ? '1' : '0'};
    ${mixins.transition};
    transform: ${({ isOpen }) => isOpen ? 'translateX(0)' : 'translateX(300px)'};
    z-index: 15;
`;

const StyledPreview = styled.div`
    ${mixins.hiddenScrollbar};
    display: grid;
`;

const StyledPriceWrapper = styled.div`line-height: 0;`;
const StyledCartHeader = styled.div`${mixins.flexBetween};`;

const StyledCheckout = styled.div`
    ${mixins.flexBetween};
    padding: 10px 0;
`;

const StyledGrid = styled.div`
    ${mixins.flexBetween};
    flex-direction: column;
    align-items: stretch;
    height: 95%;
`;

const Cart = ({ isOpen, setOpen }) => {
    const [loading, setLoading] = useState(false);
    const { totalPrice, redirectToCheckout, cartCount, clearCart, cartDetails } = useShoppingCart();
    const cartRef = useRef(null);

    const cart = [];

    for (const sku in cartDetails) {
        const cartEntry = cartDetails[sku]
        cart.push(cartEntry)
    };

    const handleCheckout = () => {
        setLoading(true)
        redirectToCheckout()
    };
    
    useEffect(() => {
        const clickOutside = (e) => !cartRef.current.contains(e.target) && setOpen(false);
        isOpen && window.addEventListener('click', clickOutside);

        return () => window.removeEventListener('click', clickOutside);
    }, [isOpen, setOpen])

     return(
        <StyledWrapper isOpen={isOpen} ref={cartRef} >
            <Button remove onClick={() => setOpen(false)} />
            <StyledCartHeader>
                <Paragraph big bold>Your cart</Paragraph>
                <Paragraph>{cartCount} Items</Paragraph>
                <Button border onClick={() => clearCart()}>clear cart</Button>
            </StyledCartHeader>
            <StyledGrid>
                <StyledPreview>
                    {cart.map(item => (
                        <CartPreview key={item.sku} item={item} />
                    ))}
                </StyledPreview>
                <StyledCheckout>
                    <StyledPriceWrapper>
                        <Paragraph>cart total:</Paragraph>
                        <Paragraph big bold>{totalPrice()}</Paragraph>
                    </StyledPriceWrapper>
                    <Button border disabled={loading} onClick={handleCheckout}>checkout</Button>
                </StyledCheckout>
            </StyledGrid>
        </StyledWrapper>
    )
};

Cart.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    setOpen: PropTypes.func.isRequired
}

export default Cart;

