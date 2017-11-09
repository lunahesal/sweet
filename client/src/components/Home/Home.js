import React, { Component } from 'react'
import './home.css'
import logo from './logo.svg'

class Home extends Component {
  render() {
    return (
      <div className='home'>
        <div className='home-hero'>
          <img src={ logo } alt="logo" className='home-logo'/>
          <div className='home-title'>
            SWEET-STATION
          </div>
          <div className='home-slogan'>
            Enjoy Delicious
          </div>
        </div>
        <div className='home-actions'>
          <div className='signup'>注册</div>
          <div className='login'>登录</div>
        </div>
      </div>
    )
  }
}
export default Home
