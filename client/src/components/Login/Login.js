import React, { Component } from 'react'
import './login.css'
import Form from '../Form/Form'

class Login extends Component {
  render() {
    const fields = [
      {
        type:'text',
        placeholder:'用户名'
      },
      {
        type:'password',
        placeholder:'密码'
      }
    ]
    const title = '登录'
    const option = {
      text:'没有账号，请先注册',
      link:'./signup'
    }
    return (
      <div className='login'>
        <Form fields = { fields }
          option={ option }
          title = { title }/>
      </div>
    )
  }
}
export default Login
