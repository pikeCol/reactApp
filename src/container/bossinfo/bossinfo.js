import React from 'react'
import {NavBar, InputItem, TextareaItem, Button} from 'antd-mobile';
import Avatars from '../../component/avatars/avatars'
import {connect} from 'react-redux'
import {update} from '../../redux/user.redux'
import {Redirect} from 'react-router-dom'

@connect(state => state.user, {update})
class BossInfo extends React.Component {
  state = {
    title: '',
    company: '',
    money: '',
    desc: '',
    avatar: ''
  }
  handleChange = (key, v) => {
    this.setState({[key]: v})
  }
  render() {
    const pathname = this.props.location.pathname
    const path = (this.props.redirectTo === pathname
      ? true
      : false)
    return (
      <div>
        {!path
          ? <Redirect to={this.props.redirectTo}/>
          : null}
        <NavBar mode="dark">Boss完善信息页面</NavBar>
        <Avatars
          selectAvatar={(avatarName) => {
          this.setState({avatar: avatarName})
        }}/>
        <InputItem onChange={(v) => this.handleChange('title', v)}>
          招聘职位
        </InputItem>
        <InputItem onChange={(v) => this.handleChange('company', v)}>
          招聘公司
        </InputItem>
        <InputItem onChange={(v) => this.handleChange('money', v)}>
          招聘薪资
        </InputItem>
        <TextareaItem
          autoHeight
          title='招聘简介'
          rows={3}
          onChange={(v) => this.handleChange('desc', v)}></TextareaItem>
        <Button onClick={() => this.props.update(this.state)} type="primary">保存</Button>
      </div>
    )
  }
}

export default BossInfo;
