import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Label } from '@components';
import { Input, Paragraph } from '@styles';

const FieldWrapper = styled.div`
    margin-bottom: 25px;
`;

const StyledInline = styled.div`
    display: flex;
    width: 100%;

    input:first-child, input:last-child { border-radius: 0}
    input:last-child {margin-left: -1px}
`;

const BillingDetails = ({ register, errors }) => {
    const [emailError, setEmailError] = useState('');
    const [addressError, setAddressError] = useState('');

    const { email, country, name, address, address2, city, zip, state } = errors;

    const handleInvalid = (e) => {
        const { validationMessage } = e.target;
        e.target.name === 'email' ? setEmailError(validationMessage) : setAddressError(validationMessage)
    }
    
    // zip code need pattern / full name need pattern / 
    return (
        <>
            <Label title='E-mail' error={email} />
            <FieldWrapper>
                <Input type='email' name='email' err={email} onChange={() => setEmailError('')} onInvalid={handleInvalid} ref={register({ required: true })} />
            </FieldWrapper>
            {emailError && <Paragraph err red>{emailError}</Paragraph>}

            <Label title='E-mail' error={(country || name || address || address2 || city || zip || state)} />
            <FieldWrapper>
                <Input type="text" name='name' placeholder='Full Name' err={name} onChange={() => setAddressError('')} onInvalid={handleInvalid} ref={register({ required: true })}  />
                <Input type="text" name='address' placeholder='Address (Line 1)'  err={address} onChange={() => setAddressError('')} onInvalid={handleInvalid} ref={register({ required: true })}  />
                <Input type="text" name='address2' placeholder='Address (Line 2)'  err={address2} onChange={() => setAddressError('')} onInvalid={handleInvalid} ref={register}  />
                <StyledInline>
                    <Input type="text" name='city' placeholder="City" err={city} onChange={() => setAddressError('')} onInvalid={handleInvalid} ref={register({ required: true })}  />
                    <Input type="text" name='zip' placeholder="Postal Code (ZIP)" err={zip} onChange={() => setAddressError('')} onInvalid={handleInvalid} ref={register({ required: true })}  />
                </StyledInline>
                <Input type='text' name='state' placeholder='State' err={state} onChange={() => setAddressError('')} onInvalid={handleInvalid} ref={register({ required: true })}  />
            </FieldWrapper>
            {addressError && <Paragraph err red>{addressError}</Paragraph>}
        </>
    )
};

BillingDetails.propTypes = {
    register: PropTypes.func.isRequired,
    errors: PropTypes.object
}

BillingDetails.defaultProps = {
    errors: null
}

export default BillingDetails;
