import React from 'react';
import PropTypes from 'prop-types';
import Error from './Error';

const GlobalError = ({message, errorId, isActive, hideGlobalError}) => (
  <div style={{display: isActive ? 'block' : 'none', marginTop: '5em'}}>
    <Error error={{message, errorId}} closable={true} onClose={hideGlobalError}/>
  </div>
);

GlobalError.propTypes = {
  message: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  errorId: PropTypes.string,
  hideGlobalError: PropTypes.func.isRequired
};

export default GlobalError;
