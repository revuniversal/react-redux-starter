import React, { Component } from 'react'
import AppNavbar from '../shared/AppNavbar'

class App extends Component {
  render() {
    return (
      <div>
        <AppNavbar />
        
        <div className="container">
          { this.props.children }
        </div>
      </div>
    )
  }
}

export default App