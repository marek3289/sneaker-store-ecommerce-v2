import styled, { css } from 'styled-components';

const Paragraph = styled.p`
    font-size: ${({ theme }) => theme.fontSize.xs };
    font-weight: ${({ theme, bold }) => bold ? theme.bold : theme.light };
    opacity: ${({ gray }) => gray && '0.4' };

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

    ${({ red }) => (
        red && css`
            color: red;
	    `
	)}

    ${({ err }) => (
        err && css`
            margin: -15px 0;
            margin-bottom: 25px;
	    `
	)}
`;

export default Paragraph;