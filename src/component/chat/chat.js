import React from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'
import {connect} from 'react-redux'
import io from 'socket.io-client'
@withRouter
class Chat extends React.Component {
	componentDidMount() {
		const socket=io('ws://localhost:9093')

	}
	render(){
		return(
			<p>我说{this.props.match.params.user}</p>
		)
	}
}
export default Chat;