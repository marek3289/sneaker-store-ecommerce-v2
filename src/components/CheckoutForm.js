import React, { useState } from 'react';
import styled from 'styled-components';
import { CardNumberElement, CardExpiryElement, CardCvcElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';

const StyledForm = styled.form`
    width: 400px;
    background-color: lightblue;
`;

const CheckoutForm = ({ onSuccessfulCheckout }) => {
    const [isProcessing, setProcessing] = useState(null);
    const [error, setError] = useState(null);
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const billingDetails = {
            // name: e.target.name.value,
            // email: e.target.email.value,
            // adress: {
            //     city: e.target.city.value,
            //     line1: e.target.adress.value,
            //     state: e.target.state.value,
            //     postal_code: e.target.zip.value
            // }
        }

        if (!stripe || !elements) return;

        setProcessing(true);

        const { data: clientSecret } = await axios.post('/lamda/payment_intent', {
            amount: 100
        })

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement('cardNumber'),
            billing_details: billingDetails
        })

        if (error) {
            setError(error.message);
            setProcessing(false);
        } else {
            setError(null);

            try {
                const { id } = paymentMethod;

                const confirmedCardPayment = await stripe.confirmCardPayment(clientSecret, {
                    payment_method: id
                })

                setProcessing(false);
                onSuccessfulCheckout();
            } catch (error) {
                setError(error.message);
                setProcessing(false);
            }
        }
    }
    
    return (
        <StyledForm onSubmit={handleSubmit}>
            <div>billing elements</div>
            <div>
                <CardNumberElement /> 
                <CardExpiryElement />
                <CardCvcElement />
            </div>
            <button type='submit' disabled={!stripe || isProcessing}>
                {isProcessing ? 'Processing...' : 'Pay'}
            </button>
            {error && <p>{error}</p>}
        </StyledForm>
    )
};

export default CheckoutForm;
