
import axios from "axios"
import { getAccessToken } from "../lib/auth"
import accessToken from "./jwt-token-access/accessToken"
import * as notification from "../lib/notification"
import { actions as loadIndicatorActions } from "../common/load-indicator/index"
import { actions as globalErrorActions } from "../common/global-error/index"
import Config from "../config/config.default";
//pass new generated access token here
const token = accessToken

//apply base url for axios
const API_URL = process.env.BACKEND_API_URL

const axiosApi = axios.create({
  baseURL: Config.apiUrl,
})

axiosApi.defaults.headers.common["Authorization"] = getAccessToken()

axiosApi.interceptors.request.use(
  config => {
   
//    store.dispatch(loadIndicatorActions.showLoadIndicator())
    return config
  },
  error => {
    //// store.dispatch(loadIndicatorActions.hideLoadIndicator());
    notification.error('Some thing wenty wrong in request')
    return Promise.reject(error)
  }
)

axiosApi.interceptors.response.use(
  response => {
   // store.dispatch(loadIndicatorActions.hideLoadIndicator());
    return response;
  },

  error => {

    console.error(error)
    
    // loadIndicatorActions.hideLoadIndicator();
    notification.error(error?.response?.data ?? 'Some thing went wrong....')
    Promise.reject(error)
  }
)

export async function get(url, config = {}) {
  return await axiosApi.get(url, { ...config }).then(response => response?.data)
}

export async function post(url, data, config = {}) {
  return axiosApi
    .post(url, { ...data }, { ...config })
    .then(response => response?.data)
}

export async function put(url, data, config = {}) {
  return axiosApi
    .put(url, { ...data }, { ...config })
    .then(response => response?.data)
}

export async function del(url, config = {}) {
  return await axiosApi
    .delete(url, { ...config })
    .then(response => response?.data)
}
