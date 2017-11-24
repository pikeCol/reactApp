import React, { Component } from 'react';
import { List, InputItem, WingBlank, WhiteSpace, Button } from 'antd-mobile'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {login} from '../../redux/user.redux'
@connect(
	state=>state.user,
	{login}
)
class Login extends Component {
	state={
		username:'',
		password:''
	}
	login =() =>{
		this.props.login(this.state)
	}
	handleChange = (key, val) => {
		this.setState({
			[key]:val
		})
	}
	render() {
		return (
			<div>
				<WhiteSpace />
				<List>
					<InputItem onChange={(v)=>this.handleChange('username',v)}>用户名</InputItem>
					<InputItem onChange={(v)=>this.handleChange('password',v)}>密码</InputItem>
				</List>
				<WhiteSpace />
				<WingBlank>
					<Button type="primary" onClick={this.login}>登录</Button>
					<WhiteSpace />
					<Button type="primary" onClick={()=>this.props.history.push('/register')}>注册</Button>
				</WingBlank>
				{this.props.msg?<p>{this.props.msg}</p>:null}
				{this.props.redirectTo? <Redirect to={this.props.redirectTo} />:null}
			</div>
		)
	}
}


export default Login;
