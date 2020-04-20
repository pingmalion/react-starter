import { addParameters } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

addParameters({
  backgrounds: [
    { name: 'white', value: '#FFF', default: true },
    { name: 'black', value: '#000' },
  ],
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
});
