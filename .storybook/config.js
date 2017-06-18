import { configure } from '@storybook/react';

function loadStories() {
  require('../src/components/Example/stories/index');
}

configure(loadStories, module);
