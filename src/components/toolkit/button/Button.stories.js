import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';

import { Button } from './Button';

export default {
  component: Button,
  title: 'Toolkit/Button',
  decorators: [withKnobs, withA11y],
};

export const basic = () => (
  <Button onClick={action('clicked')}>
    {text('children', 'Hello Storybook')}
  </Button>
);
