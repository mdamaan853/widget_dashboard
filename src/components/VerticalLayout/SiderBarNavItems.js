import { ALL_USER_CAN_VIEW } from "../../constants";
import { useState, useEffect } from "react"
import { useSelector } from "react-redux"
const { userRoutes } = require("../../routes/allRoutes")
function useSideBarNavItems(friendID) {
  const user = useSelector(state=> state.Account.user);
  return  userRoutes.filter(routeItem => {
      if(routeItem.showInSideBar){
          if(routeItem.roles.includes(ALL_USER_CAN_VIEW)||routeItem.roles.includes(user?.role) ) return true;
      }
      return false
  })
}

export default useSideBarNavItems;
