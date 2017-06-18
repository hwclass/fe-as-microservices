// snapshot.js
import React from 'react';
import Example from '../';
import renderer from 'react-test-renderer';

test('Example component parses default text', () => {
  const component = renderer.create(
    <Example/>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});