import { combineReducers } from "redux"

// Front
import Layout from "./layout/reducer"

import Breadcrumb from "./Breadcrumb/reducer"

// Authentication
import Login from "./auth/login/reducer"
import Account from "./auth/register/reducer"
import ForgetPassword from "./auth/forgetpwd/reducer"
import Profile from "./auth/profile/reducer"

//Calendar
import calendar from "./calendar/reducer"

import loadIndicator from "../common/load-indicator/reducer"
import { reducer as globalError } from "../common/global-error/index"
import { reducer as companies } from "../pages/Companies/index"
import { reducer as services } from "../pages/Services/index"

const rootReducer = combineReducers({
  // public
  Layout,
  loadIndicator,
  globalError,
  //Breadcrumb items
  Breadcrumb,

  Login,
  Account,
  ForgetPassword,
  Profile,
  calendar,
  services,

  companies,
})

export default rootReducer
