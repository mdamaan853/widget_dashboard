import * as actionTypes from "./actionType"
import * as actions from "./actions"
import { call, takeEvery } from "redux-saga/effects"
import * as companyApis from "./api"
import * as notification from "../../lib/notification"
import { arrayToObject } from "../../lib/helper"
import { get, post,put } from "../../helpers/api_helper"

function* getAllCompaines(action) {
  try {
    const result = yield call(get(companyApis.GET_ALL_COMPANINES))
    yield put(actions.getAllCompanyUpdate(arrayToObject(result, "id")))
    notification.success("Company info loaded successfully")
  } catch (error) {
    console.log(error)
  }
}
function* setCompanyCreate(action) {
  const { name, website, address } = action
  try {
    const result = yield call(
      post(companyApis.CREATE_COMPANY, name, website, address)
    )
    yield put(actions.setCompanyCreateSuccess(arrayToObject(result, "id")))
    notification.success("Company details saved successfully")
  } catch (error) {
    console.log(error)
  }
}
function* setCompanyUpdate(action) {
  const { name, website, address } = action
  try {
    const result = yield call(
      post(companyApis.UPDATE_COMPANY, name, website, address)
    )
    yield put(actions.setCompanyUpdateSuccess(arrayToObject(result, "id")))
    notification.success("Company details saved successfully")
  } catch (error) {
    console.log(error)
  }
}

function* saga() {
  yield takeEvery(actionTypes.GET_ALL_COMPANY_REQUEST, getAllCompaines)
  yield takeEvery(actionTypes.SET_COMPANY_CREATE_REQUEST, setCompanyCreate)
  yield takeEvery(actionTypes.SET_COMPANY_UPDATE_REQUEST, setCompanyUpdate)
}

export default saga
