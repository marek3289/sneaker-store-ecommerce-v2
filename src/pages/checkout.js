import React from "react";
import { navigate } from 'gatsby';

import { SEO, CheckoutForm } from '@components';

const Checkout = () => {
    
    return (
        <>
            <SEO title="Checkout" />
            <CheckoutForm />
        </>
    )
};

export default Checkout;
 // onSuccessfulCheckout={() => navigate=('/success')} /