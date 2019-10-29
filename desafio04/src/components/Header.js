import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';

function Header()  {
    return (
      <div className='header'>
        <Navbar color="header" light expand="md">
          <NavbarBrand >facebook</NavbarBrand>
          <NavbarToggler  />
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink>Meu perfil</NavLink>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    )
  } 

export default Header;