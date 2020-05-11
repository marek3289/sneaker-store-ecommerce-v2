import React from 'react';
import styled from 'styled-components';

import { mixins } from '@styles';
const config = require('@config');

const StyledWrapper = styled.div`
  ${mixins.flexColumn};
  justify-content: center;
  align-items: flex-end;
  font-size: ${({ theme }) => theme.fontSize.m };
  margin-bottom: 100%;
  grid-column: 12/12;
  grid-row: 1;

  @media (max-height: 600px) and (orientation: landscape) { 
    font-size: ${({ theme }) => theme.fontSize.s };
    margin-bottom: 0;
  }

  @media (max-height: 500px) and (orientation: landscape) { 
    font-size: ${({ theme }) => theme.fontSize.xs };
  }
`;

const StyledLink = styled.a`
  writing-mode: vertical-rl;
  margin: 25px 0;

  @media (max-height: 600px) and (orientation: landscape) { 
    margin: 15px 0;
  }

  @media (max-height: 500px) and (orientation: landscape) { 
    margin: 5px 0;
  }
`;

const SocialLinks =  () => (
    <StyledWrapper>
      {config.socialMedia.map(({name, url}) => (
        <StyledLink key={name} href={url}>{name}</StyledLink>
      ))}
    </StyledWrapper>
);

export default SocialLinks;

