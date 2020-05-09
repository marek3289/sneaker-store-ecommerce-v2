import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { media, mixins, Button } from '@styles';

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

const Footer =  ({ next, previous, handleNavigate, idx, length }) => {
    const format = (num) => ('0' + (num)).slice(-2);

    return (
    <StyledWrapper>
        <StyledPagination>
            <Button arrow prev disabled={previous === ''} onClick={() => handleNavigate(previous)}>Prev</Button>
            <Button arrow next disabled={next === ''} onClick={() => handleNavigate(next)}>Next</Button>
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
    handleNavigate: PropTypes.func.isRequired,
    idx: PropTypes.number.isRequired,
    length: PropTypes.number.isRequired
}

export default Footer;
