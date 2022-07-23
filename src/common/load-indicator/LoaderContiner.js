import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import React from 'react';
import * as actionTypes from './actionTypes';
import LoadIndicator from './LoadIndicator';

const mapStateToProps = state => ({
  message: state.loadIndicator.message,
  isActive: state.loadIndicator.isActive
});

const mapDispatchToProps = dispatch => bindActionCreators(actionTypes, dispatch);

const LoadIndicatorContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoadIndicator);

export default LoadIndicatorContainer;
