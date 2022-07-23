import {put,post,get} from "../../../helpers/api_helper"

export const setLogin = (email, password)=> post('/web/login',{email, password}).then(res=>res.data)
export const setRegister = ()=> post('/web/register').then(res=>res.data)   