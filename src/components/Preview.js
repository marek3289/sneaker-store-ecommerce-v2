import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import TransitionLink from 'gatsby-plugin-transition-link';
import { formatCurrencyString } from 'use-shopping-cart';

import { media, mixins, Paragraph } from '@styles';
import { productTransition } from '@utils/transitions';

const slugify = require('slugify');

const StyledLinkWrapper = styled(TransitionLink)`
    background-color: ${({ theme }) => theme.gray100};
    display: grid;
    grid-template-rows: 4fr 1fr;
    padding: 25px;
    border: 1px solid ${({ theme }) => theme.white };
    ${mixins.fullHeight};
    ${media.desktop`height: 100%;`};
`

const StyledFigure = styled.figure`
    ${mixins.flexCenter};
    width: 100%;
    height: 100%;
`;

const StyledDescription = styled.div`
    line-height: 5px;
`;

const Preview = ({ sku }) => {
    const { name, value, currency, featuredImage } = sku;
    const slug = slugify(name, { lower: true });

    const price = formatCurrencyString({
        value,
        currency,
        language: 'en',
    });

    return(
        <StyledLinkWrapper 
            to={`/products/${slug}`} 
            entry={{
                trigger: ({ entry, node }) => productTransition(entry, node),
                state: {
                    isEntry: true
                },
                appearAfter: 0.1,
                length: 1
            }}
            >
            <StyledFigure>
                <img alt={name} src={featuredImage.src} srcSet={featuredImage.srcSet} sizes={featuredImage.sizes} />
            </StyledFigure>
            <StyledDescription>
                <Paragraph medium bold>{name}</Paragraph>
                <Paragraph medium>{price}</Paragraph>
            </StyledDescription>
        </StyledLinkWrapper>
    )
};

Preview.propTypes = {
    sku: PropTypes.shape({
        name: PropTypes.string,
        currency: PropTypes.string,
        price: PropTypes.number,
        sku: PropTypes.string,
        image: PropTypes.object
    }).isRequired
}

export default Preview;

