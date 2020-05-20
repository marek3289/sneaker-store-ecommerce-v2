import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useStripe, useElements } from '@stripe/react-stripe-js';
import { useForm } from "react-hook-form";
import axios from 'axios';

import { BillingDetails, CardDetails } from '@components';
import { media, mixins, Button } from '@styles';

const StyledForm = styled.form`
    ${mixins.fullSize};
    & > * { max-width: 400px; min-width: 300px; }

    ${media.desktop`
        ${mixins.flexCenter};
        flex-direction: column;
        & > * { width: 80%; }
    `};
`;

const CheckoutForm = ({ price, value, onSuccessfulCheckout }) => {
    const { handleSubmit, register, errors } = useForm();

    const [error, setError] = useState('');
    const [isProcessing, setProcessing] = useState(false);
    const [required, setRequired] = useState(false);
    
    const handleCardChange = (e) => {
        if (e.empty) {
            setRequired(true);
        } else {
            setRequired(false);
        }
        e.error ? setError(e.error.message) : setError('');
    };

    const stripe = useStripe();
    const elements = useElements();

    const onSubmit = async (values) => {
        const { email, name, city, address, address2, state, zip } = values;

        const billingDetails = {
            name,
            email,
            address: {
                city,
                line1: address,
                line2: address2,
                state,
                postal_code: zip
            }
        }

        if (!stripe || !elements) return;
        setProcessing(true);

        try {
            const { data: clientSecret } = await axios.post('/.netlify/functions/payment_intent', {
                amount: value
            });

            const { error, paymentMethod } = await stripe.createPaymentMethod({
                type: 'card',
                card: elements.getElement('cardNumber'),
                billing_details: billingDetails,
            })

            if (error) {
                setError(error.message);
                setProcessing(false);
                return;
            }

            const { id } = paymentMethod;
            const confirmCardPayment = await stripe.confirmCardPayment(clientSecret, {
                payment_method: id
            })

            if (confirmCardPayment.error) {
                setError(error.message);
                setProcessing(false);
                return;
            }

            onSuccessfulCheckout();
            setProcessing(false);
        } catch (err) {
            setError(err.message ? err.message : 'An unknown error occured');
            setProcessing(false);
        }
    }
    
    return (
        <StyledForm onSubmit={handleSubmit(onSubmit)} onInvalid={(e) => e.preventDefault()}>
            <h4>Billing Details:</h4>
            <BillingDetails register={register} errors={errors} />
            <h4>Payment Details:</h4>
            <CardDetails error={error} required={required} handleCardChange={handleCardChange} />
            <Button submit type='submit' disabled={!stripe || isProcessing}>
                {isProcessing ? 'Processing...' : `Pay ${price}`}
            </Button>
        </StyledForm>
    )
};

CheckoutForm.propTypes = {
    price: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    onSuccessfulCheckout: PropTypes.func.isRequired
}

export default CheckoutForm;
