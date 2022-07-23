import * as actionTypes from "./actionTypes"
import * as constants from "./constants"
const initialState = {
  [constants.ALL_SERVICES]: {
    1: { _index: 1, name: "AI BOT" },
    2: { _index: 1, name: "Manual BOT" },
  },
  activeTab: 1,

  services: {
    1: {
      [constants.SERVICE_NAME]: "Tech BOT",
      [constants.SERVICE_TECH]: "JS",
      [constants.SERVICE_DEV_MAIL]: "xyz@gmail.com",
      [constants.SERVIVE_LINKED_COMPANY]: 123,
      [constants.SERVICE_LINK_WITH_URL]: "xydsdh@gmail.com",
      [constants.SERVICE_TYPE]: "OBJECT_REF_KEY_FOR_SERVICE_PROVIDING",
      ["constants.SERVICE_TYPE_DEPENDENT_FILEDS"]: {
        //IF AI BOT
        [constants.AI_BOT_QUESTION_ANSWER_DATA_ALL_VERSIONS]: {
          1: {
            [constants.QUESTION_ANSWER_VERSION]: 1,
            [constants.QADATA]: {
              1: {
                index: 1,
                q: "Whats your name ",
                a: " My name is abdul",
                isPrimary: true,
              },
              2: {
                index: 2,
                q: "what the time now",
                a: " check the clock..",
                isPrimary: false,
              },
            },
          },
          2: {
            [constants.QUESTION_ANSWER_VERSION]: 2,
            isPrimary: false,
            [constants.QADATA]: {
              3: {
                index: 3,
                q: "Whats your name ",
                a: " My name is abdul",
              },
              4: {
                index: 4,
                q: "what the time now",
                a: " check the clock..",
              },
            },
          },
          3: {
            [constants.QUESTION_ANSWER_VERSION]: 3,
            [constants.QADATA]: {
              5: {
                index: 5,
                q: "Whats your name ",
                a: " My name is abdul",
              },
              6: {
                index: 6,
                q: "what the time now",
                a: " check the clock..",
              },
            },
          },
        },
      },
      UI_DATA: {
        header: "",
        botDes: "",
        additionalInfo: "",
      },
      status: {
        isServiceActive: true,
        paymentInfo: {
          // payment gateWay
        },
      },
      createdOn: "DD_MM_YYYY",
      UPDATEDON: "DD_MM_YYYY",
    },
    2: {
      [constants.SERVICE_NAME]: "XYZ",
      [constants.SERVICE_TECH]: "react",
      [constants.SERVICE_DEV_MAIL]: "xyz@gmail.com",
      [constants.SERVIVE_LINKED_COMPANY]: 123,
      [constants.SERVICE_APIKEY]: "sssss",
      [constants.SERVICE_LINK_WITH_URL]: "xydsdh@gmail.com",
      [constants.SERVICE_TYPE]: 1,
    },
    3: {
      [constants.SERVICE_NAME]: "XYZ",
      [constants.SERVICE_TECH]: "Angular",
      [constants.SERVICE_DEV_MAIL]: "xyz@gmail.com",
      [constants.SERVIVE_LINKED_COMPANY]: 124,
      [constants.SERVICE_APIKEY]: "abcssd",
      [constants.SERVICE_LINK_WITH_URL]: "xydsdh@gmail.com",
      [constants.SERVICE_TYPE]: 2,
    },
    4: {
      [constants.SERVICE_NAME]: "XYZ",
      [constants.SERVICE_TECH]: "techId",
      [constants.SERVICE_DEV_MAIL]: "xyz@gmail.com",
      [constants.SERVIVE_LINKED_COMPANY]: 124,
      [constants.SERVICE_APIKEY]: "abcxxxd",
      [constants.SERVICE_LINK_WITH_URL]: "xydsdh@gmail.com",
      [constants.SERVICE_TYPE]: 2,
    },
  },
  networkCallRunning: false,
  showCreateUpdateWindow: false,
  error: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_ALL_SERVICE_SUCCESS:
      return { ...state, services: action.result }
    case actionTypes.SET_SERVICE_CREATE_REQUEST: {
      return {
        ...state,
        networkCallRunning: true,
      }
    }
    case actionTypes.SET_SERVICE_CREATE_SUCCESS: {
      return {
        ...state,
        networkCallRunning: false,
        // services: {
        //   ...services,
        //   [action.result.index]: action.result,
        // },
      }
    }
    case actionTypes.SET_SERVICE_CREATE_ERROR: {
      return {
        ...state,
        networkCallRunning: false,
        error: action.error,
      }
    }

    case actionTypes.SET_SERVICE_UPDATE_REQUEST: {
      return {
        ...state,
        networkCallRunning: true,
      }
    }
    case actionTypes.SET_SERVICE_UPDATE_SUCCESS: {
      return {
        ...state,
        networkCallRunning: false,
        // services: {
        //   ...services,
        //   [action.result.index]: action.result,
        // },
      }
    }
    case actionTypes.SET_SERVICE_UPDATE_ERROR: {
      return {
        ...state,
        networkCallRunning: false,
        error: action.error,
      }
    }
    case actionTypes.SET_SHOW_HIDE_SERVICE_WINDOW: {
      return {
        ...state,
        networkCallRunning: false,
        showCreateUpdateWindow: action.show,
      }
    }
    case actionTypes.SET_ACTIVE_SERVICE_TAB: {
      return {
        ...state,
        activeTab: action.tabId,
      }
    }
    default:
      return state
  }
}
