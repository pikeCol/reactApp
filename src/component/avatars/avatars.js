/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import {Grid, List} from 'antd-mobile'
import PropTypes from 'prop-types'
class Avatars extends React.Component {
  static PropTypes = {
    selectAvatar: PropTypes.func.isRequired
  }
  state = {}

  render() {
    const avatarList = 'boy,bull,chick,crab,girl,hedgehog,hippopotamus,koala,lemur,man,pig,tiger,whale,w' +
        'oman,zebra'
      .split(',')
      .map(v => ({
        icon: require(`../../../public/img/${v}.png`),
        text: v
      }))
    const GridHeader = this.state.icon
      ? (
        <div>
          <span>已经选择的头像</span>
          <img src={this.state.icon} style={{
            width: 20
          }}/>
        </div>
      )
      : '请选择头像'
    return (
      <div>
        <List renderHeader={() => GridHeader}>
          <Grid
            data={avatarList}
            onClick={ele => {
            this.setState({icon: ele.icon});
            this
              .props
              .selectAvatar(ele.text)
          }}
            columnNum={5}/>
        </List>
      </div>
    )
  }
}
export default Avatars;
