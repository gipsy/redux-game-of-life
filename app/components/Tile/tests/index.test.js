import React from 'react';
import { shallow } from 'enzyme';

import Tile from '../index';

describe('<Tile />', () => {
  const ComponentWrapper = shallow(
    <Tile />
  );

  it('should render td element', () => {
    expect(ComponentWrapper.find('td')).toBeTruthy();
  });
});
