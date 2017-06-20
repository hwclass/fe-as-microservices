// __tests__/snapshot.js
import React from 'react';
import styled from 'styled-components';
import 'jest-styled-components'
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Button from '../';

const StyledButton = styled(Button)``;

describe('Button component', () => {
  test('parses the correct styled component', () => {
    const button = renderer.create(
      <Button/>
    ).toJSON();
    expect(button).toMatchStyledComponentsSnapshot()
  })
})