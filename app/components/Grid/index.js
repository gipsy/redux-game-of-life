import React, { createElement } from 'react';
import Tile from 'components/Tile';

const renderTile = (toggle, y) => (alive, x) =>
  createElement(Tile, {
    alive,
    key: x,
    // eslint-disable-next-line no-shadow
    toggle: (alive) => toggle({
      coordinates: { y, x },
      current: alive,
    }),
  });

const renderRow = (toggle) => (row, y) =>
  <tr key={y}>
    { row.map(renderTile(toggle, y)) }
  </tr>;

// eslint-disable-next-line react/prop-types
export default ({ grid, toggle }) =>
  <table className="grid">
    <tbody>
      { grid.map(renderRow(toggle)) }
    </tbody>
  </table>;
