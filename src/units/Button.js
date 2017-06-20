import React from 'react'
import styled from 'styled-components';
import styles from '../css/Button.css'

const Button = ({ className }) => (
  <button className={className}>My litttle, tiny button</button>
)

const StyledButton = styled(Button)`
  color: palevioletred;
  font-weight: bold;
`;

export default StyledButton