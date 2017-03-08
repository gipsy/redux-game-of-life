import React from 'react';
import { shallow } from 'enzyme';

import Grid from '../index';

describe('<Grid />', () => {
  const props = {
    grid: [],
    toggle: false,
  };
  const ComponentWrapper = shallow(
    <Grid {...props} />
  );

  it('should render grid', () => {
    expect(ComponentWrapper.find(Grid)).toBeTruthy();
  });
});
