import React from 'react'
import {connect} from 'react-redux'
import { NavBar } from 'antd-mobile'
import NavBarLink from '../../component/navlink/navlink'

function Boss() {
	return <h2>Boss首页</h2>
}
function Genius() {
	return <h2>Genius首页</h2>
}
function Msg() {
	return <h2>Msg首页</h2>
}
function User() {
	return <h2>User首页</h2>
}

@connect(
	state=>state
)
class Dashboard extends React.Component {
	render() {
		const {pathname} = this.props.location
		const user = this.props.user
		console.log(this.props)
		const navList = [{
			path:'/boss',
			text:'牛人',
			icon:'user',
			title:'牛人列表',
			component:Boss,
			hide:user.type=='genius',
		}, {
			path:'/genius',
			text:'boss',
			icon:'user',
			title:'BOSS列表',
			component:Genius,
			hide:user.type=='boss',
		}, {
			path:'/msg',
			text:'消息',
			icon:'comment',
			title:'消息',
			component:Msg
		}, {
			path:'/me',
			text:'我的',
			icon:'user-circle',
			title:'个人中心',
			component:User
		}]
		return(
			<div>
				<NavBar mode='dark'>{navList.find(v=>v.path==pathname).title}</NavBar>
				<NavBarLink data={navList}></NavBarLink>
			</div>
			)
			
	}
}
export default Dashboard;