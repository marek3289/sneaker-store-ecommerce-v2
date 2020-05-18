import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// import { CardNumberElement, CardExpiryElement, CardCvcElement } from '@stripe/react-stripe-js';

import { Label } from '@components';
import { Paragraph, Input } from '@styles';

const CARD_OPTIONS = {
    style: {
      base: {
        fontSize: '14px',
        fontWeight: '300',
        color: 'black',
        '::placeholder': {
          color: '#d3d3d3'
        },
      },
      invalid: {
        color: 'black',
      }
    },
  };

const FieldWrapper = styled.div`
    margin-bottom: 25px;
`;

const StyledInline = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100%;

    input:first-child {
        border-top: ${({ theme }) => theme.border };
        border-right: ${({ theme }) => theme.border };
    }
`;

const StyledCard = styled(Input)`
    :first-child, :last-child { border-radius: 0}
    :first-child {
        border-bottom-left-radius: 10px;
    }
    :last-child {
        margin-left: -1px;
        border-bottom-right-radius: 10px;
    }
`;

const CardDetails = ({ error, handleCardChange, required, CardNumberElement, CardExpiryElement, CardCvcElement }) => (
    <>
        <Label title='Card Information' error={required} />
        <FieldWrapper>
            <Input err={required} as={CardNumberElement} options={CARD_OPTIONS} onChange={handleCardChange} /> 
            <StyledInline>
                <StyledCard err={required} as={CardExpiryElement} options={CARD_OPTIONS} onChange={handleCardChange} />
                <StyledCard err={required} as={CardCvcElement} options={CARD_OPTIONS} onChange={handleCardChange} />
            </StyledInline>
        </FieldWrapper>
        {error && <Paragraph err red>{error}</Paragraph>}
    </>
);

CardDetails.propTypes = {
    error: PropTypes.string.isRequired,
    handleCardChange: PropTypes.func.isRequired,
    required: PropTypes.bool.isRequired,
}

export default CardDetails;