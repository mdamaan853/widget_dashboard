import * as actionTypes from "./actionTypes";

export const showLoadIndicator = (message= 'Loading...')=>({
    type:actionTypes.SHOW_LOAD_INDICATOR,
    message
})
export const hideLoadIndicator = ()=>({
    type:actionTypes.HIDE_LOAD_INDICATOR,
})