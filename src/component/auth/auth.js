import React from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'
import {connect} from 'react-redux'
import {load_data} from '../../redux/user.redux'

@withRouter
@connect(
	null,
	{load_data}
)
class Auth extends React.Component {
	componentDidMount() {
		const pathname = this.props.location.pathname
		const pathList = ['/login','/register']
		
		if (pathList.indexOf(pathname)>-1) {
			return null
		}

		axios.get('/api/user/info')
			.then(res=>{
				console.log(this.props)
				if (res.data.status==200) {
					this.props.load_data(res.data.data)
				} else {
					this.props.history.push('/login')
				}
			})

	}
	render(){
		return(
			<p></p>
		)
	}
}
export default Auth;