import React, { Component } from 'react'
import './signup.css'
import Form from '../Form/Form'



class Signup extends Component {
  render() {
    const fields = [
      {
        type:'text',
        placeholder:'用户名'
      },
      {
        type:'password',
        placeholder:'密码'
      },
      {
        type:'password',
        placeholder:'再次输入'
      },
      {
        type:'email',
        placeholder:'email'
      }
    ]

    return (
      <div className='signup'>
        <Form fields = { fields }/>
      </div>
    )
  }
}
export default Signup
