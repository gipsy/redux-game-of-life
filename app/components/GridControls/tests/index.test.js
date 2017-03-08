import React from 'react';
import { shallow } from 'enzyme';

import ControlGrid from '../index';

describe('<ControlGrid />', () => {
  const props = {
    counter: {},
    actions: {},
  };
  const ComponentWrapper = shallow(
    <ControlGrid {...props} />
  );

  it('should render toggle button', () => {
    expect(ComponentWrapper.find(ControlGrid)).toBeTruthy();
  });
});
