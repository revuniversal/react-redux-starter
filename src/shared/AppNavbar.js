import React, {Component} from 'react'
import {Navbar, Nav, NavItem} from 'react-bootstrap'
import {Link} from 'react-router'
import {LinkContainer} from 'react-router-bootstrap'

class AppNavbar extends Component {
  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">
              App
            </Link>
          </Navbar.Brand>
        </Navbar.Header>

        <Nav>
          <LinkContainer to="/admin">
            <NavItem>Admin</NavItem>
          </LinkContainer>
        </Nav>
      </Navbar>
    )
  }
}

export default AppNavbar