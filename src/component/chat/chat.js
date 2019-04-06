import React from 'react'
// import axios from 'axios'
import {withRouter} from 'react-router-dom'
// import {connect} from 'react-redux'
import io from 'socket.io-client'
import {List, InputItem} from 'antd-mobile'

const socket = io('ws://localhost:9093')

@withRouter
class Chat extends React.Component {
		state = {
				text: '',
				msg: []
		}
		componentDidMount() {

				socket.on('recvmsg', (data) => {
						console.log(data)
						this.setState({
								msg: [
										...this.state.msg,
										data.text
								]
						})
				})
		}
		componentWillUpdate(nextProps, nextState) {
				console.log(nextState)
		}

		handleSubmit = () => {
				socket.emit('sendmsg', {text: this.state.text})
				this.setState({text: ''})
		}
		render() {
				const list = this
						.state
						.msg
						.map(v => (
								<p key={v}>
										{v}
								</p>
						))
				return (
						<div>
								<div>{list}</div >
								<div className="stick-footer">
										<List>
												<InputItem
														placeholder="enter"
														onChange={v => this.setState({text: v})}
														value={this.state.text}
														extra={(
														<span onClick= { () => this.handleSubmit() }>
																send
														</span>
												)}></InputItem>
										</List>
								</div>
						</div>
				)
		}
}
export default Chat;