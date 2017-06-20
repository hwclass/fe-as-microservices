// __tests__/snapshot.js
import React from 'react';
import styled from 'styled-components';
import 'jest-styled-components'
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Example from '../';

const StyledExample = styled(Example)``;

describe('Example component', () => {
  test('parses the correct styled component', () => {
    const example = renderer.create(
      <Example/>
    ).toJSON();
    expect(example).toMatchStyledComponentsSnapshot()
  })
})