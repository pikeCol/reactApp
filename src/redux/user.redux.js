import {getRedirectPath} from '../util'
import axios from 'axios'
const AUTH_SUCCESS = 'AUTH_SUCCESS'
// const REGISTER_ERROR = 'REGISTER_ERROR' const REGISTER_MSG = 'REGISTER_MSG'
const ERROR_MSG = 'ERROR_MSG'
const LOAD_DATA = 'LOAD_DATA'
const LOGOUT = 'LOGOUT'

const initState = {
		redirectTo: '',
		msg: '',
		username: '',
		type: ''
}
// reducer
export function user(state = initState, action) {
		switch (action.type) {
				case AUTH_SUCCESS:
						return {
								...state,
								redirectTo: getRedirectPath(action.payload),
								...action.payload
						}
				case ERROR_MSG:
						return {
								...state,
								isAuth: false,
								msg: action.msg
						}
				case LOAD_DATA:
						return {
								...state,
								...action.payload
						}
				case LOGOUT:
						return {
								...initState,
								redirectTo: '/login'
						}
				default:
						return state
		}
}

// action creater
function errorMsg(msg) {
		return {msg, type: ERROR_MSG}
}
export function logOut() {
		return {type: LOGOUT}
}
export function load_data(userinfo) {
		return {payload: userinfo, type: LOAD_DATA}
}

function authSuccess(obj) {
		// const { password, ...data} = obj
		return {type: AUTH_SUCCESS, payload: obj}
}

export function update(data) {
		return dispatch => {
				axios
						.post('/api/user/update', data)
						.then(res => {
								if (res.data.status === 200) {
										dispatch(authSuccess(res.data.data))
								} else {
										dispatch(errorMsg(res.data.msg))
								}
						})
		}
}
export function login({username, password}) {
		if (!username || !password) {
				return errorMsg('请输入账户名或密码')
		}
		return dispatch => {
				axios
						.post('/api/user/login', {username, password})
						.then(res => {
								console.log(res)
								if (res.data.status === 200) {
										dispatch(authSuccess(res.data.data))
								} else {
										dispatch(errorMsg(res.data.msg))
								}
						})
		}
}

export function register({username, password, repeatpassword, type}) {
		if (!username || !password) {
				return errorMsg('请输入账户名或密码')
		}
		if (password !== repeatpassword) {
				return errorMsg('请输入相同的密码')
		}
		return dispatch => {
				axios
						.post('/api/user/register', {username, password, type})
						.then((res) => {
								if (res.data.status === 200) {
										console.log(res)
										dispatch(authSuccess(res.data.data))
								} else {
										dispatch(errorMsg(res.data.msg))
								}
						})
		}

}
