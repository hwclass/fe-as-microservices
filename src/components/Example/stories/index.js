import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Example from './';

storiesOf('Example', module)
  .add('with text', () => <div><span>Example Component</span></div>)