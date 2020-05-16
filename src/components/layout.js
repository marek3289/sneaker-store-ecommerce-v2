import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { CartProvider } from 'use-shopping-cart'

import { GlobalStyle, theme, mixins } from '@styles';
import { Header } from '@components';
const config = require('@config');

const StyledContent = styled.div`
    ${mixins.flexColumn};
    min-height: 100vh;
`;

const stripePromise = loadStripe('pk_test_xtKiUnBl1NpBMuVpmZ6AlxD100sbAyw1yA');

const MainLayout = ({ children, location }) => {
    const cartProps = {
        stripe: stripePromise,
        successUrl: `${location.origin}${config.routes.success}`,
        cancelUrl: `${location.origin}`,
        currency: "USD",
        allowedCountries: ['US', 'GB', 'CA'],
        billingAddressCollection: true
    }

    return (
        <CartProvider {...cartProps}>
            <Elements stripe={stripePromise}>
                <GlobalStyle />
                <ThemeProvider theme={theme}>
                    <StyledContent>
                        <Header />
                        {children}    
                    </StyledContent>   
                </ThemeProvider>
            </Elements>
        </CartProvider>
    )
};

export default MainLayout;