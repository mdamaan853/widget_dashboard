import * as actionTypes from './actionTypes';

const initialState = {
  message: '',
  isActive: false,
  errorId: ''
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SHOW_GLOBAL_ERROR:
      return {
        ...state,
        message: action.message,
        isActive: true,
        errorId: action.errorId
      };

    case actionTypes.HIDE_GLOBAL_ERROR:
      return {
        ...state,
        message: '',
        isActive: false,
        errorId: null
      };
    default:
      return state;
  }
};

export default reducer;
