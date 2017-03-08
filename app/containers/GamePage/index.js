import React from 'react';
import Helmet from 'react-helmet';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import GridControls from 'components/GridControls';
import Grid from 'components/Grid';

import * as actionMethods from './actions';

// eslint-disable-next-line react/prefer-stateless-function
export class GamePage extends React.PureComponent {
  render() {
    return (
      <div>
        <Helmet
          title="Game Page"
          meta={[
            { name: 'description', content: 'Game page of React.js Boilerplate application' },
          ]}
        />
        <GridControls
          actions={this.props.actions}
          counter={this.props.counter}
        />
        <div>
          <Grid
            toggle={this.props.actions.toggle}
            grid={this.props.grid}
          />
        </div>
      </div>
    );
  }
}

GamePage.propTypes = {
  counter: React.PropTypes.object.isRequired,
  grid: React.PropTypes.array.isRequired,
  actions: React.PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  // it is possible to use spread operator here e.g. return { ...state }
  counter: state.get('game').counter,
  grid: state.get('game').grid,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actionMethods, dispatch),
});

// Wrap the component to inject dispatch and state into it
export default connect(
  mapStateToProps,
  mapDispatchToProps)(GamePage);
