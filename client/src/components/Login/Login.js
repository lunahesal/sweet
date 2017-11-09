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
    return (
      <div className='login'>
        <Form fields = { fields } />
      </div>
    )
  }
}
export default Login
