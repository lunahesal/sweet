import React, { Component } from 'react'
import './layout.css'

class Layout extends Component {
  render() {
    return (
      <div className='layout'>
        <div className='layout-header'>
          header
        </div>
        <div className='layout-main'>
          <div className='layout-main-inner'>
            { this.props.children }        
          </div>
        </div>
      </div>
    )
  }
}
export default Layout

// import React from 'react'
// import './layout.css'

// export default ({ children }) => (
//   <div className='layout'>
//     <div className='layout-header'>
//       header
//     </div>
//     <div className='layout-main'>
//       { children }
//     </div>
//   </div>
// )
