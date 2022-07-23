import React from 'react';
import PropTypes from 'prop-types';

const Error = ({error, closable, onClose}) => (
  <div className="alert alert-danger" role="alert">
    {closable && onClose &&
    <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={onClose.bind(this)}>
      <span aria-hidden="true">&times;</span>
    </button>
    }
    {error.response && error.response.data && error.response.data.message &&
    <strong>
      {error.response.data.message}
    </strong>
    }
    {!(error.response && error.response.data && error.response.data.message) &&
    <strong>
      {error.message}
    </strong>
    }
    {error.errorId &&
    <div>
      Error id: {error.errorId}
    </div>
    }
  </div>
);

Error.propTypes = {
  error: PropTypes.object.isRequired,
  closable: PropTypes.bool,
  onClose: PropTypes.func
};

export default Error;
