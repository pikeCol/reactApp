import React from 'react'
import PropTypes from 'prop-types'
import {Card, WhiteSpace, WingBlank} from 'antd-mobile'
import {withRouter} from 'react-router-dom'

@withRouter
class UserCard extends React.Component {
	static propTypes = {
	  userlist: PropTypes.array.isRequired
	}
	constructor(props) {
	  super(props);
	}
	hanlde=(v)=>{
		console.log(444)
	}
	render() {
		const Header = Card.Header
		const Body = Card.Body
		var that = this
		return(
		<WingBlank>
		<WhiteSpace></WhiteSpace>
			{
				this.props.userlist.map(v=>(
				v.avatar?(<Card 
									key={v.username} 
									onClick={(v)=>that.hanlde(v)}
									>
									<Header
										title={v.title}
										thumb={require(`../../../public/img/${v.avatar}.png`)}
										extra={<span>{v.title}</span>}
									></Header>
									<Body>
										{v.type=='boss'?<div>公司:{v.company}</div>:null}
										{v.description.split('\n').map(d=>(<div key={d}>{d}</div>))}
										{v.type=='boss'?<div>薪资:{v.money}</div>:null}
									</Body>
								</Card>):null

				))
			}
		</WingBlank>
		)
	}
}
export default UserCard;