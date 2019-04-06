import React, {Component} from 'react';
import {Redirect} from 'react-router-dom'
import {
		List,
		InputItem,
		WingBlank,
		WhiteSpace,
		Button,
		Radio
} from 'antd-mobile'
import {connect} from 'react-redux'
import {register} from '../../redux/user.redux'
import userFormWrap from '../../component/userform/userform'

const RadioItem = Radio.RadioItem;
@connect(state => state.user, {register})
@userFormWrap
class Register extends Component {
		handleRegister = () => {
				this
						.props
						.register(this.props.state)
		}
		componentDidMount() {
				this
						.props
						.handleChange('type', 'genius')
		}
		render() {
				return (
						<div>
								<WhiteSpace/>
								<List>
										<InputItem onChange={(v) => this.props.handleChange('username', v)}>用户名</InputItem>
										<InputItem onChange={(v) => this.props.handleChange('password', v)}>密码</InputItem>
										<InputItem onChange={(v) => this.props.handleChange('repeatpassword', v)}>重复密码</InputItem>
										<RadioItem
												value="genius"
												checked={this.props.state.type === 'genius'}
												onChange={() => this.props.handleChange('type', 'genius')}>牛人</RadioItem>
										<RadioItem
												value="boss"
												checked={this.props.state.type === 'boss'}
												onChange={() => this.props.handleChange('type', 'boss')}>boss</RadioItem>
								</List>
								<WhiteSpace/>
								<WingBlank>
										<Button type="primary" onClick={this.handleRegister}>注册</Button>
										<WhiteSpace/>
										<Button onClick={() => this.props.history.push('/login')}>返回</Button>
								</WingBlank>
								{this.props.msg
										? <p>{this.props.msg}</p>
										: null}
								{this.props.redirectTo
										? <Redirect to={this.props.redirectTo}/>
										: null}
						</div>
				)
		}
}

export default Register;