// import axios from "axios"
// import store from "../store"
// import Config from "../config/config.default"
// import * as notification from "../lib/notification"
// import { actions as loadIndicatorActions } from "../common/load-indicator/index"
// import { actions as globalErrorActions } from "../common/global-error/index"
// import { getAccessToken } from "./auth"

// // Default axios instance with api url and spinner
// const axiosDefaultConfig = {
//   baseURL: Config.apiUrl,
// }

// // location service axiosInstance with api url and spinner;

// export const axiosDefault = axios.create(axiosDefaultConfig)

// export const constructResponseError = error => {
//   const errorData = {
//     message: "Sorry, something went wrong, please try again...",
//   }
//   if (error.response && error.response.data && error.response.data.message) {
//     errorData.message = error.response.data.message
//     if (error.response.data.errorId) {
//       errorData.errorId = error.response.data.errorId
//     }
//   } else if (error.message) {
//     // If no response, fallback to error.message
//     errorData.message = error.message
//   }

//   return errorData
// }

// axiosDefault.defaults.headers.common['Authorization'] = getAccessToken();

// // axiosDefault.interceptors.request.use(
// //   response => {
// //     store.dispatch(loadIndicatorActions.showLoadIndicator())
// //     return response
// //   },
// //   error => {
// //     store.dispatch(loadIndicatorActions.hideLoadIndicator())

// //     // Prepare and show error message
// //     // const errorData = constructResponseError(error)

// //     notification.error(error)

// //     store.dispatch(globalErrorActions.showGlobalError(error))

// //     return Promise.reject(error)
// //   }
// // )

// // axiosDefault.interceptors.response.use(
// //   response => {
// //     store.dispatch(loadIndicatorActions.hideLoadIndicator())
// //     return response
// //   },
// //   errorData => {
// //     store.dispatch(loadIndicatorActions.hideLoadIndicator())

// //     // Prepare and show error message
// //     // const errorData = constructResponseError(error)

// //     notification.error(errorData)

// //     store.dispatch(globalErrorActions.showGlobalError(errorData))

// //     return Promise.reject(errorData)
// //   }
// // )
