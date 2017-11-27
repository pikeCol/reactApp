import React from 'react'
import PropTypes from 'prop-types' 
import {TabBar} from 'antd-mobile'
import FontAwesome from 'react-fontawesome';
import {withRouter} from 'react-router-dom'

@withRouter
class NavBarLink extends React.Component {
	static PropTypes = {
		data:PropTypes.array.isRequired
	}
	render() {
		const navList = this.props.data.filter(v=>!v.hide)
		const {pathname} = this.props.location
		return (
			<TabBar>
				{
					navList.map(v=>(
						<TabBar.Item
							key={v.path}
							title={v.text}
							icon={<FontAwesome
										  name={v.icon}
										  style={{ fontSize: "17px" }}
										/>}
							selectedIcon={<FontAwesome
												  name={`${v.icon}-o`}
												  style={{ color:'#108ee9' }}
												/>
												}
							selected={pathname==v.path}
							onPress={()=>{
								this.props.history.push(v.path)
							}}
						></TabBar.Item>
					))
				}
			</TabBar>
		)
	}
}

export default NavBarLink;