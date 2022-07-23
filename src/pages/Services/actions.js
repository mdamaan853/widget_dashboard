import * as actionTypes from "./actionTypes"

export const setServiceCreate = (name, website, address) => {
  return {
    type: actionTypes.SET_SERVICE_CREATE_REQUEST,
    name,
    website,
    address,
  }
}

export const setServiceCreateSuccess = result => {
  return {
    type: actionTypes.SET_SERVICE_CREATE_SUCCESS,
    result,
  }
}

export const setServiceCreateError = error => {
  return {
    type: actionTypes.SET_SERVICE_CREATE_ERROR,
    error,
  }
}

export const setServiceUpdate = (name, website, address) => {
  return {
    type: actionTypes.SET_SERVICE_UPDATE_REQUEST,
    name,
    website,
    address,
  }
}

export const setServiceUpdateSuccess = result => {
  return {
    type: actionTypes.SET_SERVICE_UPDATE_SUCCESS,
    result,
  }
}

export const setServiceUpdateError = error => {
  return {
    type: actionTypes.SET_SERVICE_UPDATE_ERROR,
    error,
  }
}

export const getAllServiceUpdate = (name, website, address) => {
  return {
    type: actionTypes.GET_ALL_SERVICE_REQUEST,
    name,
    website,
    address,
  }
}

export const getAllServiceUpdateSuccess = result => {
  return {
    type: actionTypes.GET_ALL_SERVICE_SUCCESS,
    result,
  }
}

export const getAllServiceUpdateError = error => {
  return {
    type: actionTypes.GET_ALL_SERVICE_ERROR,
    error,
  }
}

export const setShowHideServiceWindow = show => ({
  type: actionTypes.SET_SHOW_HIDE_SERVICE_WINDOW,
  show,
})

export const setActiveTab = tabId => ({
  type: actionTypes.SET_ACTIVE_SERVICE_TAB,
  tabId,
})
