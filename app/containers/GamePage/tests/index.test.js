import React from 'react';
import { mount } from 'enzyme';

import GridControls from 'components/GridControls';
import Grid from 'components/Grid';
import { GamePage } from '../index';

describe('<GamePage />', () => {
  const props = {
    counter: {},
    grid: [],
    actions: {},
  };
  const ComponentWrapper = mount(<GamePage {...props} />);

  it('should render grid controls', () => {
    expect(ComponentWrapper.find(GridControls).length).toBeTruthy();
  });

  it('should render grid board', () => {
    expect(ComponentWrapper.find(Grid).length).toEqual(1);
  });
});
