// __tests__/dom.js

import React from 'react';
import styled from 'styled-components';
import 'jest-styled-components'
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Example from '../';

const StyledExample = styled(Example)``;

describe('Example component', () => {
  test('renders without crashing', () => {
    shallow(<Example />);
  })

  test('parses with the correct style rules', () => {
    const example = renderer.create(
      <Example/>
    ).toJSON();
    expect(example).toHaveStyleRule('color', 'blue')
    expect(example).toHaveStyleRule('font-size', '11px')
  })
})