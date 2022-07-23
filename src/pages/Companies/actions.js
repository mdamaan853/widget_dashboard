import * as actionTypes from "./actionType"

export const setCompanyCreate = (name, website, address) => {
  return {
    type: actionTypes.SET_COMPANY_CREATE_REQUEST,
    name,
    website,
    address,
  }
}

export const setCompanyCreateSuccess = result => {
  return {
    type: actionTypes.SET_COMPANY_CREATE_SUCCESS,
    result,
  }
}

export const setCompanyCreateError = error => {
  return {
    type: actionTypes.SET_COMPANY_CREATE_ERROR,
    error,
  }
}

export const setCompanyUpdate = (name, website, address) => {
  return {
    type: actionTypes.SET_COMPANY_UPDATE_REQUEST,
    name,
    website,
    address,
  }
}

export const setCompanyUpdateSuccess = result => {
  return {
    type: actionTypes.SET_COMPANY_UPDATE_SUCCESS,
    result,
  }
}

export const setCompanyUpdateError = error => {
  return {
    type: actionTypes.SET_COMPANY_UPDATE_ERROR,
    error,
  }
}

export const getAllCompanyUpdate = (name, website, address) => {
  return {
    type: actionTypes.GET_ALL_COMPANY_REQUEST,
    name,
    website,
    address,
  }
}

export const getAllCompanyUpdateSuccess = result => {
  return {
    type: actionTypes.GET_ALL_COMPANY_SUCCESS,
    result,
  }
}

export const getAllCompanyUpdateError = error => {
  return {
    type: actionTypes.GET_ALL_COMPANY_ERROR,
    error,
  }
}

export const setShowHideCompanyWindow = show => ({
  type: actionTypes.SET_SHOW_HIDE_COMPANY_WINDOW,
  show,
})
