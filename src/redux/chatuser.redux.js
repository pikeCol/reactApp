import axios from 'axios'

const USER_LIST = 'USER_LIST'
const initState = {
		userlist: []
}
export function chatuser(state = initState, action) {
		switch (action.type) {
				case USER_LIST:
						return {
								...state,
								userlist: action.payload
						}
				default:
						return state
		}
}

function userList(data) {
		return {type: USER_LIST, payload: data}
}

export function getUserList(type) {
		let url = '/api/user/list?type=' + type
		console.log(url)
		return dispatch => {
				axios
						.get(url)
						.then(res => {
								console.log(res)
								if (res.data.status === 200) {
										dispatch(userList(res.data.data))
								}
						})
		}
}