import * as actionTypes from './actionTypes';

/**
 * Show global error
 * @param data either string (error message) or object {message: string, errorId: string}
 */
export const showGlobalError = (data)  => {
  let message = null;
  let errorId = null;
  if (typeof data === 'object' && data !== null) {
    message = data.message;
    errorId = data.errorId;
  } else {
    message = data;
  }

  return {
    type: actionTypes.SHOW_GLOBAL_ERROR,
    message,
    errorId
  }
};

export const hideGlobalError = () => ({
  type: actionTypes.HIDE_GLOBAL_ERROR
});
