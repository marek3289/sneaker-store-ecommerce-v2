import styled from 'styled-components';

const Input = styled.input`
  font-size: ${({ theme }) => theme.fontSize.m };
  font-weight: ${({ theme }) => theme.light };
  color: ${({ theme }) => theme.black };
  background-color: ${({ theme }) => theme.white };
  width: 100%;
  padding: ${({ theme }) => theme.borderPadding };
  margin-top: -1px;
  border: 1px solid ${({ theme, err }) => err ? theme.red : theme.gray300};
  transform: ${({ err }) => err && 'scaleY(1.01)' };

  &:first-child {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  &:last-child {
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }

  &::placeholder {
    color: ${({ theme }) => theme.gray300 };
  }
`;

export default Input;