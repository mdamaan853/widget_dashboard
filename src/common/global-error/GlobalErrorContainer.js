import { connect } from 'react-redux';
import React from 'react';
import GlobalError from './GlobalError';
import {hideGlobalError, showGlobalError} from './actions';

const mapStateToProps = state => ({
  message: state.globalError.message,
  isActive: state.globalError.isActive,
  errorId: state.globalError.errorId
});

const actionCreators = {
  showGlobalError,
  hideGlobalError,
};


const GlobalErrorContainer = connect(
  mapStateToProps,
  actionCreators
)(GlobalError);

export default GlobalErrorContainer;
