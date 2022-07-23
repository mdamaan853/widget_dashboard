import initialState from "./initialState"
import * as actionTypes from "./actionTypes"
import * as constants from "../../constants"

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_FIELD_UPDATE:
      return {
        ...state,
        [action.fieldName]: action.value,
      }
    case actionTypes.SET_AI_BOT_DATA_WITH_VERSION:
      return {
        ...state,
        [constants.AI_BOT_DEPENDENT_DATA]: {
          ...state[constants.AI_BOT_DEPENDENT_DATA],
          [action.version]: {
            [constants.QUESTION_ANSWER_VERSION]: action.version,
            data: action.data,
          },
        },
      }
    case "reset":
      return 0
    default:
      throw new Error("Unexpected action")
  }
}
