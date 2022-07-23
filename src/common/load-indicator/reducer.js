import * as actionTypes from "./actionTypes"
const initialState = {
  message: "Loading...",
  isActive: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SHOW_LOAD_INDICATOR: {
      return {
        ...state,
        message: action.message || 'Loading...',
        isActive: true,
      }
    }
    case actionTypes.HIDE_LOAD_INDICATOR: {
      return {
        ...state,
        isActive: false,
      }
    }
    default : return {...state}
  }
}
