/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import {connect} from 'react-redux'
import {Result, List, WhiteSpace, Modal} from 'antd-mobile'
import browserCookie from 'browser-cookies'
import {logOut} from '../../redux/user.redux'
import {Redirect} from 'react-router-dom'

@connect(state => state.user, {logOut})
class User extends React.Component {
		logout = () => {
				const alert = Modal.alert
				alert('注销', '确定删除么？', [
						{
								text: '取消',
								onPress: () => console.log('cancel')
						}, {
								text: '确定',
								onPress: () => {
										browserCookie.erase('uid')
										this
												.props
												.logOut()
								}
						}
				])
		}
		render() {
				const props = this.props
				const Item = List.Item
				const Brief = Item.Brief
				return props.username
						? (
								<div>
										<Result
												img={< img src = {
												require(`../../../public/img/${props.avatar}.png`)
										} />}
												title={props.username}
												message={props.type === 'boss'
												? props.company
												: null}/>
										<List renderHeader={() => '简介'}>
												<Item multipleLine>
														{props.title}
														{props
																.description
																.split('\n')
																.map(v => (
																		<Brief key={v}>
																				{v}
																		</Brief>
																))}
														{props.money
																? <Brief>薪资：{props.money}</Brief>
																: null}
												</Item>
										</List>
										<WhiteSpace></WhiteSpace>
										<List>
												<Item onClick={() => this.logout()}>退出登录</Item>
										</List>
								</div>
						)
						: <Redirect to={this.props.redirectTo}/>
		}
}

export default User;