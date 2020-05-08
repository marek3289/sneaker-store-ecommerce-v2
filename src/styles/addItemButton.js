import styled from 'styled-components';
import mixins from './mixins';

const Button = styled.button`
    width: 50px;
    max-width: 50px;
    height: 50px;
    background-color: ${({ theme }) => theme.green300 };
    border-radius: 100px;
    border: 6px solid ${({ theme }) => theme.green200 };
    box-shadow: 0 0 0 6px ${({ theme }) => theme.green100 };
    position: relative;
    transition: transform 0.1s ease-in-out;

    ::before, ::after {
        ${mixins.pseudoElements};
        width: 15px;
        height: 3px;
        background-color: ${({ theme }) => theme.white };
        transform: translate(-50%, -50%);
    }
    
    ::after {
        transform: translate(-50%, -50%) rotate(90deg);
    }

    :hover { 
        transform: scale(1.2);
    }

    :active {
        transform: scale(1.1);
    }
`;

export default Button;