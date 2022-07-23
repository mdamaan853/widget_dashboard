import * as actionTypes from "./actionType"

const initialState = {
 companies: {
    123: {
      name: "Company 1",
      website: "xyz.com",
      address: "zddgsadgjsd",
      phoneNumber:"",
      email: "Emailc.com",
      _id: "123",
    }, 124: {
        name: "Company 2",
        website: "xyz3.com",
        address: "zddgsadgjsd",
        phoneNumber:"",
        email: "Emailc.com",
        _id: "124",
      },
  },
  networkCallRunning: false,
  showCreateUpdateWindow: false,
  error: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_ALL_COMPANY_SUCCESS:
      return { ...state, companies: action.result }
    case actionTypes.SET_COMPANY_CREATE_REQUEST: {
      return {
        ...state,
        networkCallRunning: true,
      }
    }
    case actionTypes.SET_COMPANY_CREATE_SUCCESS: {
      return {
        ...state,
        networkCallRunning: false,
        // companies: {
        //   ...companies,
        //   [action.result.id]: action.result,
        // },
      }
    }
    case actionTypes.SET_COMPANY_CREATE_ERROR: {
      return {
        ...state,
        networkCallRunning: false,
        error: action.error,
      }
    }

    case actionTypes.SET_COMPANY_UPDATE_REQUEST: {
      return {
        ...state,
        networkCallRunning: true,
      }
    }
    case actionTypes.SET_COMPANY_UPDATE_SUCCESS: {
      return {
        ...state,
        networkCallRunning: false,
        // companies: {
        //   ...companies,
        //   [action.result.id]: action.result,
        // },
      }
    }
    case actionTypes.SET_COMPANY_UPDATE_ERROR: {
      return {
        ...state,
        networkCallRunning: false,
        error: action.error,
      }
    }
    case actionTypes.SET_SHOW_HIDE_COMPANY_WINDOW: {
      return {
        ...state,
        networkCallRunning: false,
        showCreateUpdateWindow: action.show,
      }
    }
    default:
      return state
  }
}
