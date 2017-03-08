import React from 'react';
import { shallow } from 'enzyme';

import ToggleButton from '../index';

describe('<ToggleButton />', () => {
  const props = {
    label: 'Auto',
    on: 0,
  };
  const ComponentWrapper = shallow(
    <ToggleButton {...props} />
  );

  it('should render toggle button', () => {
    expect(ComponentWrapper.find(ToggleButton)).toBeTruthy();
  });
});
