import React from 'react';
import ToggleButton from 'components/ToggleButton';
import { randomizer } from '../../utils/randomizer';

class GridControls extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.reset = this.reset.bind(this);
    this.random = this.random.bind(this);
  }

  toggleAutoplay(tick) {
    return () => {
      if (this.props.counter.startedAt) {
        return this.stop();
      }

      this.props.actions.startPlaying(Date.now());
      return this.start(tick);
    };
  }

  random() {
    this.props.actions.makeRandomGrid({ randomizer });
  }

  start(tick) {
    tick({
      frameId: window.requestAnimationFrame(() => this.start(tick)),
      now: Date.now(),
    });
  }

  stop() {
    window.cancelAnimationFrame(this.props.counter.frameId);
    this.props.actions.stopPlaying();
  }

  reset() {
    if (this.props.counter.startedAt) {
      return this.stop();
    }
    return this.props.actions.reset();
  }

  renderFrameRate() {
    if (this.props.counter.startedAt) {
      return (
        <div className="text-muted">
          {`${this.props.counter.frameRate} fps`}
        </div>
      );
    }
    return false;
  }

  render() {
    // Destructure props
    const { actions, counter } = this.props;

    return (
      <div className="controls">
        <button
          className="btn btn-danger"
          onClick={this.reset}
        >
          <span className="button-title">Reset</span>
        </button>
        <button
          className="btn btn-success"
          onClick={this.random}
          icon={'fa fa-random'}
        >
          <span className="button-title">Randomize</span>
        </button>
        <button
          className="btn btn-default"
          disabled={!!counter.frameId}
          onClick={actions.tick}
        >
          <i className="fa fa-fast-forward fa-sm"></i>
          <span className="button-title">Next</span>
        </button>
        <ToggleButton
          label="Auto"
          on={counter.startedAt}
          onClick={this.toggleAutoplay(actions.tick)}
        />
        {this.renderFrameRate()}
      </div>
    );
  }
}

GridControls.propTypes = {
  counter: React.PropTypes.object.isRequired,
  actions: React.PropTypes.object.isRequired,
};

export default GridControls;
