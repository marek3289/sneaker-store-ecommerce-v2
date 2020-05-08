import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import { mixins } from '@styles';
import { Cart, CartButton } from '@components';
const config = require('@config');

const StyledWrapper = styled.header`
    ${mixins.flexBetween};
    ${mixins.sidePadding};
    ${mixins.transition};
    height: 75px;
    border: 1px solid ${({ theme }) => theme.gray200 };
    background-color: ${({ theme }) => theme.white};
    z-index: 10;
`;

const Logo = styled(Link)`
    font-size: ${({ theme }) => theme.fontSize.xl };
    font-weight: ${({ theme }) => theme.bold };
`;

const Header = () => {
    const [isOpen, setOpen] = useState(false);
    
    return(
        <StyledWrapper>
            <Logo to={config.routes.home}>Sneaker Store</Logo>
            <CartButton isOpen={isOpen} setOpen={setOpen} />
            <Cart isOpen={isOpen} setOpen={setOpen} />
        </StyledWrapper>
    )
};

export default Header;

