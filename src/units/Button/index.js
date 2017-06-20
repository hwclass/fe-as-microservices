import React from 'react'
import styled from 'styled-components';

const Button = ({ className }) => (
  <button className={className}>My litttle, tiny button</button>
)

const StyledButton = styled(Button)`
  color: green;
  font-size: 12px;
`;

export default StyledButton