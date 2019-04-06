import React from 'react'
import {connect} from 'react-redux'
import {NavBar} from 'antd-mobile'
import NavBarLink from '../../component/navlink/navlink'
import {Switch, Route} from 'react-router-dom'
import Boss from '../../component/boss/boss'
import Genius from '../../component/genius/genius'
import User from '../../component/user/user'

function Msg() {
		return <h2>Msg首页</h2>
}

@connect(state => state)
class Dashboard extends React.Component {
		render() {
				const {pathname} = this.props.location
				const user = this.props.user
				console.log(this.props)
				const navList = [
						{
								path: '/boss',
								text: '牛人',
								icon: 'user',
								title: '牛人列表',
								component: Boss,
								hide: user.type === 'genius'
						}, {
								path: '/genius',
								text: 'boss',
								icon: 'user',
								title: 'BOSS列表',
								component: Genius,
								hide: user.type === 'boss'
						}, {
								path: '/msg',
								text: '消息',
								icon: 'comment',
								title: '消息',
								component: Msg
						}, {
								path: '/me',
								text: '我的',
								icon: 'user-circle',
								title: '个人中心',
								component: User
						}
				]
				return (
						<div>
								<NavBar className="fix-header" mode='dark'>{navList
												.find(v => v.path === pathname)
												.title}</NavBar>
								<div style={{
										marginTop: 45,
										paddingBottom: 50
								}}>
										<Switch>
												{navList.map(v => (
														<Route key={v.path} path={v.path} component={v.component}></Route>
												))}
										</Switch>
								</div>
								<NavBarLink data={navList}></NavBarLink>
						</div>
				)

		}
}
export default Dashboard;