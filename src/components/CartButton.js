import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { useShoppingCart } from 'use-shopping-cart';
import { mixins } from '@styles';
import CartIcon from '@assets/shopping-cart.svg';

const StyledWrapper = styled.button`
    position: relative;
    width: 25px;
    ${mixins.transition};
    display: ${({ isOpen }) => isOpen && 'none'};
`;

const StyledCounter = styled.div`
    ${mixins.flexCenter};
    background-color: ${({ theme }) => theme.red };
    color: ${({ theme }) => theme.white };
    font-size: ${({ theme }) => theme.fontSize.xs };
    position: absolute;
    bottom: -10px;
    right: -10px;
    width: 20px;
    height: 20px;
    border-radius: 10px;
`;

const CartButton = ({ isOpen, setOpen }) => {
    const { cartCount } = useShoppingCart();
    
    return(
        <StyledWrapper isOpen={isOpen} onClick={() => setOpen(!isOpen)}>
            <img src={CartIcon} alt='cart' />
            {cartCount > 0 && <StyledCounter>{cartCount}</StyledCounter>}
        </StyledWrapper>
    )
};

CartButton.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    setOpen: PropTypes.func.isRequired
}

export default CartButton;

