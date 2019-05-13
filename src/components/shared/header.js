
import React, { Component } from 'react';
import logo from '../../images/logo.svg';
import menu from '../../../data/menu';
import {
  Media,
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import { Link as RRNavLink } from 'gatsby';

class Header extends Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      isOpen: false,
    }
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }
  render() {
    return (
      <header className="header">
        <Container className="d-flex-column align-items-center mt-4 mb-4">
          <Navbar light expand="md">
            <NavbarBrand tag={RRNavLink} to="/">
              <Media left>
                <Media object src={logo} alt="Logo" className="img-fluid" />
              </Media>
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
          </Navbar>
          <Navbar light expand="md">
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto mr-auto" navbar>
                {menu.filter(x=>!x.url.includes('articles')).map((menuitem, index) => {
                  if (menuitem.sublinks !== undefined) {
                    return (
                      <UncontrolledDropdown key={index} nav inNavbar>
                        <DropdownToggle nav caret tag="div" className="text-uppercase" style={{cursor:'pointer'}}>
                          {menuitem.title}
                          <DropdownMenu left="true">
                            {menuitem.sublinks.map((sublink, index) => {
                              return <DropdownItem key={index} tag={RRNavLink} to={sublink.url}>{sublink.title}</DropdownItem>
                            })}
                          </DropdownMenu>
                        </DropdownToggle>
                      </UncontrolledDropdown>
                    )
                  } else {
                    return (
                      <NavItem key={index}>
                        <NavLink
                          tag={RRNavLink}
                          activeClassName="active"
                          to={menuitem.url}
                          className="text-uppercase"
                        >
                          {menuitem.title}
                        </NavLink>
                      </NavItem>
                    )
                  }
                })}
              </Nav>
            </Collapse>
          </Navbar>
        </Container>
      </header>
    )
  }
}

export default Header