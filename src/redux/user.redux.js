import {getRedirectPath} from '../util'
import axios from 'axios'
const AUTH_SUCCESS = 'AUTH_SUCCESS'
const REGISTER_ERROR = 'REGISTER_ERROR'
const REGISTER_MSG = 'REGISTER_MSG'
const ERROR_MSG = 'ERROR_MSG'

const initState={
	redirectTo:'',
	msg:'',
	username:'',
	type:''
}
// reducer
export function user(state=initState, action) {
	console.log(action)
	switch(action.type) {
		case AUTH_SUCCESS:
			return {...state, redirectTo:getRedirectPath(action.payload),...action.payload}
		case ERROR_MSG:
			return {...state,isAuth:false,msg:action.msg}
		default:
			return state
	}
}

// action creater
function errorMsg(msg) {
	return {msg, type:ERROR_MSG}
}

function authSuccess(obj) {
	const { password, ...data} = obj
	return {type:AUTH_SUCCESS,payload:data}
}

export function update(data) {
	return dispatch=>{
		axios.post('/api/user/update',data)
			.then(res=>{
				if (res.data.status==200) {
					dispatch(authSuccess(res.data.data))
				} else {
					dispatch(errorMsg(res.data.msg))
				}
			})
	}
}
export function login ({username,password}) {
	if (!username||!password) {
		return errorMsg('请输入账户名或密码')
	}
	return dispatch=>{
		axios.post('/api/user/login',{username,password})
			.then(res=>{
				console.log(res)
				if (res.data.status==200) {
					dispatch(authSuccess(res.data.data))
				} else {
					dispatch(errorMsg(res.data.msg))
				}
			})
	}
}


export function register({username,password,repeatpassword,type}) {
	if (!username||!password) {
		return errorMsg('请输入账户名或密码')
	}
	if (password!==repeatpassword) {
		return errorMsg('请输入相同的密码')
	}
	return dispatch=>{
		axios.post('/api/user/register',{username,password,type})
			.then((res)=>{
				if (res.data.status===200) {
					console.log(res)
					dispatch(authSuccess(res.data.data))
				} else {
					dispatch(errorMsg(res.data.msg))
				}
			})
	}
	
}

