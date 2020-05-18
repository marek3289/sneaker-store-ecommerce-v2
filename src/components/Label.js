import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { mixins, Paragraph } from '@styles';

const StyledHeading = styled.div`
    ${mixins.flexBetween};
    & > p { margin: 0 };
`;

const Label = ({ title, error }) => (
    <StyledHeading>
        <Paragraph medium>{title}</Paragraph>
        {error && <Paragraph medium red>Required</Paragraph>}
    </StyledHeading>
);

Label.propTypes = {
    title: PropTypes.string.isRequired,
    error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool])
}

Label.defaultProps = {
    error: false
}

export default Label;