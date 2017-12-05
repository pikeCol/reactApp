import React from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'
import {connect} from 'react-redux'

@withRouter
class Chat extends React.Component {
	render(){
		return(
			<p>我说{this.props.match.params.user}</p>
		)
	}
}
export default Chat;