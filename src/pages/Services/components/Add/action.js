import * as actionTypes from "./actionTypes"
export const setFieldData = (fieldName, data) => ({
  type: actionTypes.SET_FIELD_UPDATE,
  fieldName,
  data,
})

export const setAiBotDATAWithVersions = (version, data) => ({
  type: actionTypes.SET_AI_BOT_DATA_WITH_VERSION,
  version,
  data,
})

export const setAIbotUIDATA = data => ({
  type: actionTypes.SET_AI_BOT_UI_DATA,
  data,
})

export const setAIbotDataAsprimary = version => ({
  type: actionTypes.SET_AI_BOT_DATA_AS_PRIMARY,
})

export const setStateFromProps = propsState => ({
  type: actionTypes.SET_STATE_FROM_PROPS,
  propsState,
})
