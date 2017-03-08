import React from 'react';
import StyledTile from './StyledTile';

const onMouseEvent = (toggle, alive) => (evt) => {
  if (evt.nativeEvent.which !== 1) { return; }
  toggle(alive);
};

// eslint-disable-next-line react/prop-types
export default ({ alive, toggle }) =>
  <StyledTile
    className="tile"
    onMouseOver={onMouseEvent(toggle, alive)}
    onFocus={onMouseEvent(toggle, alive)}
    onMouseDown={onMouseEvent(toggle, alive)}
    style={alive ? { backgroundColor: '#800d8a' } : null}
  />;
