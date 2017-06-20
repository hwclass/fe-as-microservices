import { configure } from '@storybook/react';

function loadStories() {
  require('../src/units/Button/stories/index');
  require('../src/components/Example/stories/index');
}

configure(loadStories, module);
