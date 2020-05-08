import styled, { css } from 'styled-components';

const Paragraph = styled.p`
    font-size: ${({ theme }) => theme.fontSize.xs };
    font-weight: ${({ theme, bold }) => bold ? theme.bold : theme.light };

    ${({ medium }) => (
        medium && css`
            font-size: ${({ theme }) => theme.fontSize.s };
	    `
	)}

    ${({ big }) => (
        big && css`
            font-size: ${({ theme }) => theme.fontSize.m };
	    `
	)}
`;

export default Paragraph;