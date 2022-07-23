import React from "react"
import { Redirect } from "react-router-dom"

import ChatIcon from '@mui/icons-material/Chat';

// Profile
import UserProfile from "../pages/Authentication/user-profile"

// Authentication related pages
import Login from "../pages/Authentication/Login"
import Logout from "../pages/Authentication/Logout"
import Register from "../pages/Authentication/Register"
import ForgetPwd from "../pages/Authentication/ForgetPassword"

// pages
// import Dashboard from "../pages/Dashboard/index"
import {Container as Dashboard} from "../pages/Dashboard/index"
import  ActiveWidget from "../pages/Dashboard/components/ActiveWidgets/Container"
import  ActiveBot from "../pages/Dashboard/components/ActiveBot/Container"
import  Invoices from "../pages/Dashboard/components/Invoice/Container"
import  RegistredWebsite from "../pages/Dashboard/components/RegistredWebsite/Container"
import { Container as Companies } from "../pages/Companies/index"
import { Container as Services, AddService } from "../pages/Services/index"
import { Container as Chathistory } from "../pages/ChatHistory/index"
import { Container as ChatSupportAgent } from "../pages/ChatSupportAgent/index"


// import {Container as Services} from "../pages/Services/index.js"

//Clients
import Clients from "../pages/Clients"
import VerifyOtp from "../pages/Authentication/VerifyOtp"
import { ALL_USER_CAN_VIEW, slugs } from "../constants"

const userRoutes = [
  {
    path: "/dashboard",
    component: Dashboard,
    showInSideBar: true,
    sideBarDisplayName: "Dasboard",
    SideBarIconComponet: () => <i className="mdi mdi-view-dashboard"></i>,
    roles: [ALL_USER_CAN_VIEW],
  },
  {
    path: "/activewidget",
    component: ActiveWidget,
    showInSideBar: false,
    roles: [ALL_USER_CAN_VIEW],
  },
  {
    path: "/activebot",
    component: ActiveBot,
    showInSideBar: false,
    roles: [ALL_USER_CAN_VIEW],
  },
  {
    path: "/invoice",
    component: Invoices,
    showInSideBar: false,
    roles: [ALL_USER_CAN_VIEW],
  },
  {
    path: "/registrewebsite",
    component: RegistredWebsite,
    showInSideBar: false,
    roles: [ALL_USER_CAN_VIEW],
  },
  {
    path: "/ChatHistory",
    component: Chathistory,
    showInSideBar: false,
    sideBarDisplayName: "Chat History",
    SideBarIconComponet: () => <i className="mdi mdi-history"></i>,
    roles: [ALL_USER_CAN_VIEW],
  },
  {
    path: '/ChatAgent',
    component: ChatSupportAgent,
    showInSideBar: true,
    sideBarDisplayName: "Chat Support Agent",
    SideBarIconComponet: () => <i className="mdi mdi-film"></i>,
    roles: ["user", ALL_USER_CAN_VIEW],
    exact: true,
  },
  {
    path: slugs.selectDemo,
    component: AddService,
    showInSideBar: true,
    sideBarDisplayName: "Add New Service",
    SideBarIconComponet: () => <i className="mdi mdi-film"></i>,
    roles: ["user", ALL_USER_CAN_VIEW],
    exact: true,
  },
  {
    path: "/clients",
    component: Clients,
    showInSideBar: true,
    sideBarDisplayName: "Clients",
    SideBarIconComponet: () => <i className="mdi mdi-bank"></i>,
    roles: ["superadmin", "admin"],
  },
  {
    path: slugs.companies,
    component: Companies,
    showInSideBar: true,
    sideBarDisplayName: "Companies",
    SideBarIconComponet: () => <i className="mdi mdi-film"></i>,
    roles: ["user", ALL_USER_CAN_VIEW],
    exact: true,
  },
  {
    path: slugs.companiesToSerives,
    component: Services,
    showInSideBar: false,
    sideBarDisplayName: "Companies",
    SideBarIconComponet: () => <i className="mdi mdi-film"></i>,
    roles: ["user", ALL_USER_CAN_VIEW],
    exact: true,
  },
  

  // // //profile
  { path: "/profile", component: UserProfile, showInSideBar: false },

  // this route should be at the end of all other routes
  {
    path: "/",
    exact: true,
    component: () => <Redirect to="/dashboard" />,
    showInSideBar: false,
  },
]

const authRoutes = [
  { path: "/logout", component: Logout },
  { path: "/login", component: Login },
  { path: "/forgot-password", component: ForgetPwd },
  { path: "/register", component: Register },
  { path: "/verify", component: VerifyOtp },
]

export { userRoutes, authRoutes }
