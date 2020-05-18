import styled, { css } from 'styled-components';
import ArrowIcon from '@assets/arrow.svg';
import mixins from './mixins';

const Button = styled.button`
    background-color: transparent;
    font-size: ${({ theme }) => theme.fontSize.m };

    :disabled {
        cursor: default;
    }

    ${({ submit }) => (
        submit && css`
            font-size: ${({ theme }) => theme.fontSize.s };
            background-color: ${({ theme }) => theme.green200 };
            border: ${({ theme }) => theme.border };
            border-color: ${({ theme }) => theme.green300 };
            padding: ${({ theme }) => theme.borderPadding };
            width: 100%;

            :disabled {
                cursor: default;
                border-bottom-color: ${({ theme }) => theme.gray200 };
            }
        `
    )}

    ${({ border }) => (
        border && css`
            border-bottom: 1px solid black;
            font-size: ${({ theme }) => theme.fontSize.s };

            :disabled {
                cursor: default;
                border-bottom-color: ${({ theme }) => theme.gray200 };
            }
        `
    )}

    ${({ arrow }) => (
        arrow && css`
            position: relative;
            font-weight: ${({ theme }) => theme.bold };
            width: 75px;    
            text-align: ${({ next }) => next ? 'left' : 'right' };

            ::before {
                content: '';
                position: absolute;
                width: 10px;
                height: 100%;
                background-color: inherit;
                background-image: url(${ArrowIcon});
                background-repeat: no-repeat;
                background-size: 8px;
                background-position: center;
                opacity: ${({ disabled }) => disabled && '0.2'};
                left: ${({ prev }) => prev && '0'};
                right: ${({ next }) => next && '0'};
                transform: ${({ next }) => next && 'rotate(180deg)'};
            }
	    `
	)};

    ${({ remove }) => (
        remove && css`
            position: absolute;
            top: 5px;
            right: 5px;
            width: 15px;
            height: 15px;
            cursor: pointer;

            ::before, ::after {
                ${mixins.pseudoElements};
                width: 10px;
                height: 2px;
                background-color: black;
            }

            ::after {
                transform: translate(-50%, 50%) rotate(-45deg);
            }

            ::before {
                transform: translate(-50%, 50%) rotate(45deg);
            }
	    `
	)}
`;

export default Button;