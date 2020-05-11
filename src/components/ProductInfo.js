import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { useShoppingCart } from 'use-shopping-cart';
import { mixins, media, AddItemButton, Paragraph } from '@styles';

const StyledWrapper = styled.div`
    margin-top: 65px;
    grid-column: 1/5;
    grid-row: 1;
    z-index: 5;

    ${media.bigDesktop`margin-top: 50px;`};

    ${media.desktop`
        margin-top: 25px;
        grid-column: 1/6;
    `};

    ${media.tablet`
        margin-top: 10px;
        grid-column: 1/8;
    `};

    ${media.thone`
        margin-top: 0;
        grid-column: 1/12;
    `};

    @media (max-height: 600px) and (orientation: landscape) { 
        margin-top: 25px;
    }

    @media (max-height: 500px) and (orientation: landscape) { 
        margin-top: 10px;
    }
`;

const StyledFlex = styled.div`
    ${mixins.flexBetween};
    ${media.tablet`
        justify-content: flex-start;
        button { margin: 0 25px;}
    `};
`;

const StyledHeading = styled.h1`
    font-size: ${({ theme }) => theme.fontSize.xl4 };
    font-weight: ${({ theme }) => theme.extraBold };

    ${media.desktop`font-size: ${({ theme }) => theme.fontSize.xl3 };`};
    ${media.tablet`font-size: ${({ theme }) => theme.fontSize.xl2 };`};
    ${media.phablet`font-size: ${({ theme }) => theme.fontSize.xl };`};
    ${media.phone`font-size: ${({ theme }) => theme.fontSize.l };`};

    @media (max-height: 600px) and (orientation: landscape) { 
        font-size: ${({ theme }) => theme.fontSize.xl2 };
    }

    @media (max-height: 500px) and (orientation: landscape) { 
        font-size: ${({ theme }) => theme.fontSize.xl };
    }
`;

const StyledParagraph = styled(Paragraph)`
    font-size: ${({ theme }) => theme.fontSize.xl };
`;

const ProductInfo = ({ name, price, sku }) => {
    const { addItem } = useShoppingCart();
    
    return (
        <StyledWrapper>
            <StyledHeading>{name}</StyledHeading>
            <StyledFlex>
                <StyledParagraph>{price}</StyledParagraph>
                <AddItemButton onClick={() => addItem(sku)} />
            </StyledFlex>
        </StyledWrapper>
    )
};

ProductInfo.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    sku: PropTypes.shape({
        name: PropTypes.string,
        currency: PropTypes.string,
        price: PropTypes.number,
        sku: PropTypes.string,
        image: PropTypes.object
    }).isRequired
}

export default ProductInfo;

