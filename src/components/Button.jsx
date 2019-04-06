import React from 'react';
import styled from '@emotion/styled';

const StyledButton = styled.div`
  padding: 10px;
  background-color: #eee;
`;

export const Button = props => {
  const { children } = props;
  return <StyledButton>{children}</StyledButton>;
};

export default Button;
