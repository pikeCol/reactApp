import React from 'react'
import {NavBar, InputItem, TextareaItem, Button} from 'antd-mobile';
import Avatars from '../../component/avatars/avatars'
import {connect} from 'react-redux'
import {update} from '../../redux/user.redux'
import {Redirect} from 'react-router-dom'

@connect(state => state.user, {update})
class GeniusInfo extends React.Component {
  state = {
    title: '',
    desc: '',
    avatar: ''
  }
  handleChange = (key, v) => {
    this.setState({[key]: v})
  }
  render() {
    return (
      <div>
        {this.props.redirectTo
          ? <Redirect to={this.props.redirectTo}/>
          : null}
        <NavBar mode="dark">牛人完善信息页面</NavBar>
        <Avatars
          selectAvatar={(avatarName) => {
          this.setState({avatar: avatarName})
        }}/>
        <InputItem onChange={(v) => this.handleChange('title', v)}>
          求职职位
        </InputItem>
        <TextareaItem
          autoHeight
          title='个人简介'
          rows={3}
          onChange={(v) => this.handleChange('desc', v)}></TextareaItem>
        <Button onClick={() => this.props.update(this.state)} type="primary">保存</Button>
      </div>
    )
  }
}

export default GeniusInfo;
