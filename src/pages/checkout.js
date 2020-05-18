import React from "react";
import styled from 'styled-components';
import { navigate } from 'gatsby';

import { SEO, CheckoutForm } from '@components';
import { mixins, media } from '@styles';

const StyledWrapper = styled.div`
    ${mixins.sidePadding};
    ${mixins.fullHeight};
    display: flex;

    & > * {
        padding: 25px 5%;
    }
`;

const StyledList = styled.div`
    ${mixins.fullSize};
    /* background-color: lightgray; */
`;

// Jeśli nie ma produktów dodać - Your cart is empty 
const Checkout = () => {
    
    return (
        <>
            <SEO title="Checkout" />
            <StyledWrapper>
                <StyledList>Work in progres...</StyledList>
                <CheckoutForm price={100} onSuccessfulCheckout={() => navigate('/success')} />
            </StyledWrapper>
        </>
    )
};

export default Checkout;
