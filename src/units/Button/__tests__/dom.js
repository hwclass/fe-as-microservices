// __tests__/dom.js

import React from 'react';
import styled from 'styled-components';
import 'jest-styled-components'
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Button from '../';

const StyledButton = styled(Button)``;

describe('Button unit', () => {
  test('renders without crashing', () => {
    shallow(<Button />);
  })

  test('parses the correct styled component', () => {
    const button = renderer.create(
      <Button>Send Message</Button>
    ).toJSON();
    expect(button).toMatchStyledComponentsSnapshot()
  })

  test('parses with the correct style rules', () => {
    const button = renderer.create(
      <Button>Send Message</Button>
    ).toJSON();
    expect(button).toHaveStyleRule('color', 'green')
    expect(button).toHaveStyleRule('font-size', '12px')
  })
})