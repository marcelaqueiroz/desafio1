import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import routes from '../../routes/routes';
import '../../App.css';

const NavbarComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className="color-nav" dark expand="md">
        <NavbarBrand href="/">DESAFIO 1 - React</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            {routes.map((route, index) => {
                if(route.navbar){
                    return(
                    <NavItem key={index}>
                        <NavLink href={route.path}>{route.name}</NavLink>           
                    </NavItem>
                    );
                }
            })}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;