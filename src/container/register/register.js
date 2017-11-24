import React, { Component } from 'react';
import {Redirect} from 'react-router-dom'
import { List, InputItem, WingBlank, WhiteSpace, Button, Radio } from 'antd-mobile'
import {connect} from 'react-redux'
import {register} from '../../redux/user.redux'
const RadioItem = Radio.RadioItem;
@connect(
	state=>state.user,
	{register}
)
class Register extends Component {
	state={
		type:'genius',
		username:'',
		password:'',
		repeatpassword:''
	}
	handleChange = (key, val) => {
		this.setState({
			[key]:val
		})
	}
	handleRegister = () => {
		this.props.register(this.state)
	}
	render() {
		return (
			<div>
				<WhiteSpace />
				<List>
					<InputItem onChange={(v)=>this.handleChange('username',v)}>用户名</InputItem>
					<InputItem onChange={(v)=>this.handleChange('password',v)}>密码</InputItem>
					<InputItem onChange={(v)=>this.handleChange('repeatpassword',v)}>重复密码</InputItem>
					<RadioItem value="genius" checked={this.state.type=='genius'} onChange={()=>this.handleChange('type','genius')}>牛人</RadioItem>
					<RadioItem value="boss" checked={this.state.type=='boss'} onChange={()=>this.handleChange('type','boss')}>boss</RadioItem>
				</List>
				<WhiteSpace />
				<WingBlank>
					<Button type="primary" onClick={this.handleRegister}>注册</Button>
					<WhiteSpace />
					<Button onClick={()=>this.props.history.push('/login')}>返回</Button>
				</WingBlank>
				{this.props.msg?<p>{this.props.msg}</p>:null}
				{this.props.redirectTo?<Redirect to={this.props.redirectTo}/>:null}
			</div>
		)
	}
}


export default Register;