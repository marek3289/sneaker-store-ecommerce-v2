import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import TransitionLink from 'gatsby-plugin-transition-link';

import { media, mixins, Button } from '@styles';
import { productTransition } from '@utils/transitions'

const StyledWrapper = styled.div`
  ${mixins.flexBetween};
  width: 100%;
  z-index: 8;
  grid-column: 1/13;
  grid-row: 2;
`;

const StyledPageNumber = styled.div`
    ${mixins.flexCenter};

    h5 {
        margin-bottom: 12px;
    }
`;

const StyledPagination = styled.div`
    ${mixins.flexBetween};
    width: 200px;

    ${media.phone` width: 160px;`};
`;

const Footer =  ({ next, previous, idx, length }) => {
    const format = (num) => ('0' + (num)).slice(-2);

    return (
    <StyledWrapper>
        <StyledPagination>
            {previous !== '' && (
                <Button
                    arrow='true'
                    prev='true'
                    as={TransitionLink}
                    to={`/products/${previous}`}
                    entry={{
                        trigger: ({ entry, node }) => productTransition(entry, node),
                        state: {
                            isEntry: true
                        },
                        appearAfter: 0.1,
                        length: 0.8,
                        delay: 1,
                    }}
                    exit={{
                        trigger: ({ exit, node }) => productTransition(exit, node),
                        length: 1,
                    }}
                    >
                    Prev
                </Button>
            )}
            {next !== '' && ( 
                <Button
                    arrow='true'
                    next='true'
                    as={TransitionLink}
                    to={`/products/${next}`}
                    entry={{
                        trigger: ({ entry, node }) => productTransition(entry, node),
                        state: {
                            isEntry: true
                        },
                        appearAfter: 0.1,
                        length: 1,
                        delay: 0.9,
                    }}
                    exit={{
                        trigger: ({ exit, node }) => productTransition(exit, node),
                        length: 1,
                    }}
                    >
                    Next
            </Button>
            )}
        </StyledPagination>
        <StyledPageNumber>
            <h1>{format(idx +1)}</h1>
            <h5>/{format(length)}</h5>
        </StyledPageNumber>
    </StyledWrapper>
    )
};

Footer.propTypes = {
    next: PropTypes.string.isRequired,
    previous: PropTypes.string.isRequired,
    idx: PropTypes.number.isRequired,
    length: PropTypes.number.isRequired
}

export default Footer;
