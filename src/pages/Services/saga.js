import * as actionTypes from "./actionTypes"
import * as actions from "./actions"
import { call, takeEvery } from "redux-saga/effects"
import * as serviceApis from "./api"
import * as notification from "../../lib/notification"
import { arrayToObject } from "../../lib/helper"
import { get, post,put } from "../../helpers/api_helper"

function* getAllCompaines(action) {
  try {
    const result = yield call(get(serviceApis.GET_ALL_SERVICES))
    yield put(actions.getAllServiceUpdate(arrayToObject(result, "id")))
    notification.success("Service info loaded successfully")
  } catch (error) {
    console.log(error)
  }
}
function* setServiceCreate(action) {
  const { name, website, address } = action
  try {
    const result = yield call(
      post(serviceApis.CREATE_SERVICE, name, website, address)
    )
    yield put(actions.setServiceCreateSuccess(arrayToObject(result, "id")))
    notification.success("Service details saved successfully")
  } catch (error) {
    console.log(error)
  }
}
function* setServiceUpdate(action) {
  const { name, website, address } = action
  try {
    const result = yield call(
      post(serviceApis.UPDATE_SERVICE, name, website, address)
    )
    yield put(actions.setServiceUpdateSuccess(arrayToObject(result, "id")))
    notification.success("Service details saved successfully")
  } catch (error) {
    console.log(error)
  }
}

function* saga() {
  yield takeEvery(actionTypes.GET_ALL_SERVICE_REQUEST, getAllCompaines)
  yield takeEvery(actionTypes.SET_SERVICE_CREATE_REQUEST, setServiceCreate)
  yield takeEvery(actionTypes.SET_SERVICE_UPDATE_REQUEST, setServiceUpdate)
}

export default saga
