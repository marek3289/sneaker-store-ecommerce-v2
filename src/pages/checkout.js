import React from "react";
import { navigate } from 'gatsby';

import { SEO, CheckoutForm } from '@components';

const Checkout = () => {
    
    return (
        <>
            <SEO title="Checkout" />
            <CheckoutForm onSuccessfulCheckout={() => navigate=('/success')} />
        </>
    )
};

export default Checkout;