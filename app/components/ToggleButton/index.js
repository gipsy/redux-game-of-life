import React from 'react';
import cn from 'classnames';

const NO_OP = () => null;

const iconClasses = (on, onClass, offClass) =>
  cn('fa', 'fa-sm', {
    active: on,
    [onClass]: on,
    [offClass]: !on,
  });

const buttonClasses = (on) =>
  cn('btn', 'btn-default', {
    active: on,
  });

// eslint-disable-next-line react/prop-types
export default ({ on, label, onClass = 'fa-pause', offClass = 'fa-play', onClick = NO_OP }) =>
  <label htmlFor="autoplay" className={buttonClasses(on)}>
    <i className={iconClasses(on, onClass, offClass)}></i>
    <input
      id="autoplay"
      style={{ display: 'none' }}
      type="checkbox"
      onChange={onClick}
    /> <span className="button-title">{label}</span>
  </label>;
