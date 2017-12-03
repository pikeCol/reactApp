import React from 'react'
import {connect} from 'react-redux'
import {Result,List,WhiteSpace} from 'antd-mobile'

@connect(
	state=>state.user
)
class User extends React.Component {
	render() {
		const props = this.props
		const Item = List.Item
		const Brief = Item.Brief
	 return props.username?(
		<div>
			<Result
				img={<img src={require(`../../../public/img/${props.avatar}.png`)}/>}
				title={props.username}
				message={props.type=='boss'?props.company:null}
			/>
			<List renderHeader={()=>'简介'}>
				<Item multipleLine>
					{props.title}
					{props.description.split('\n').map(v=><Brief key={v}>{v}</Brief>)}
					{props.money?<Brief>薪资：{props.money}</Brief>:null}
				</Item>
			</List>
			<WhiteSpace></WhiteSpace>
			<List>
				<Item>退出登录</Item>
			</List>
		</div>
	 ):null
	}
}

export default User;