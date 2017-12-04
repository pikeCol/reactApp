import React from 'react'

export default function userFormWrap (Comp) {
	return class WrapComp extends React.Component {
		state={
			
		}
		handleChange = (key, val) => {
			this.setState({
				[key]:val
			})
		}

		render(){
			return <Comp {...this.props} handleChange={this.handleChange} state={this.state}></Comp>
		}


	}


}