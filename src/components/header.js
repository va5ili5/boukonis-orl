//import { Link } from 'gatsby'
//import PropTypes from 'prop-types'
import React from 'react'
//import { StaticQuery, graphql } from 'gatsby'
//import Img from 'gatsby-image'
import Logo from '../images/logo.svg';
import menu from '../../data/navigation.yml';
import {
  Media,
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
  DropdownItem } from 'reactstrap';
  import { Link as RRNavLink } from 'gatsby';
  export default class Header extends React.Component {
    constructor(props) {
      super(props);
  
      this.toggle = this.toggle.bind(this);
      this.state = {
        isOpen: false
      };
    }
    toggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
  render(){
    return (
     <header className="header">
    <div className="d-flex-column align-items-center mt-4 mb-4 container-fluid">
    <Navbar light expand="md">
          <NavbarBrand tag={RRNavLink} to="/">
          <Media left>
        <Media object src={Logo} alt="Logo" />
      </Media></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
      </Navbar>
      <Navbar light expand="md">
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto mr-auto" navbar>
            {menu.map((menuitem, index) => {
              if(menuitem.sublinks !== undefined){
                return <UncontrolledDropdown key={index} nav inNavbar>
                <DropdownToggle nav caret>
                {menuitem.title}
                <DropdownMenu right>
                  {menuitem.sublinks.map((sublink, index) =>{
                     return <DropdownItem key={index}>
                       {sublink.title}
                    </DropdownItem>
                  })}
                  </DropdownMenu>
                  </DropdownToggle>
                </UncontrolledDropdown>
              }else{
                return <NavItem key={index}>
                  <NavLink tag={RRNavLink} active={window.location.pathname === menuitem.url} to={menuitem.url}>{menuitem.title}</NavLink>
                  </NavItem>
              }
            })}
              
            </Nav>
          </Collapse>
        </Navbar>
      
    </div>
  </header>
    )
}
  }
