import React, { Component } from 'react';
import { List, InputItem, WingBlank, WhiteSpace, Button } from 'antd-mobile'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {login} from '../../redux/user.redux'
import userFormWrap from '../../component/userform/userform'

@connect(
	state=>state.user,
	{login}
)
@userFormWrap
class Login extends Component {
	login =() =>{
		this.props.login(this.props.state)
	}
	render() {
		return (
			<div>
				{(this.props.redirectTo&&this.props.redirectTo!='/login')?<Redirect to={this.props.redirectTo} />:null}
				<WhiteSpace />
				<List>
					<InputItem onChange={(v)=>this.props.handleChange('username',v)}>用户名</InputItem>
					<InputItem onChange={(v)=>this.props.handleChange('password',v)}>密码</InputItem>
				</List>
				<WhiteSpace />
				<WingBlank>
					<Button type="primary" onClick={this.login}>登录</Button>
					<WhiteSpace />
					<Button type="primary" onClick={()=>this.props.history.push('/register')}>注册</Button>
				</WingBlank>
				{this.props.msg?<p>{this.props.msg}</p>:null}
			</div>
		)
	}
}


export default Login;
