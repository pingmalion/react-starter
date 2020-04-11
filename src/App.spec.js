// @flow
import React from 'react';
import { shallow } from 'enzyme';

import App from './App';

describe('<App />', () => {
  it('is a fake test', () => {
    const component = shallow(<App />);
    expect(component).toBeTruthy();
  });
});
