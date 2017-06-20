import React from 'react'
import styled from 'styled-components';

const Example = ({ className }) => (
	<div className={className}>
    <span>Example Component</span>
	</div>
)

const StyledExample = styled(Example)`
  color: blue;
  font-size: 11px;
}`;

export default StyledExample