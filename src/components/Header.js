import React, { useState } from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from 'reactstrap';
import dinoHeaderLogo from '../assets/Tyrannosaur-in-love-by-Rones.png'

const Header = (args) => {

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <header>
        <Navbar className="nav-bar" {...args}>
          <NavbarBrand href="/" ><img
            src={dinoHeaderLogo}
            alt="Dinosaur Tinder logo with dinosaur and heart"
            className="dino-logo" style={{
              height: 85,
              width: 85
            }}
            />
          </NavbarBrand>

          <h1>Dinosaur Tinder</h1>

          <h1>Just when you thought love had gone extinct...</h1>

          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="nav-drop-down" navbar >
              <NavItem>
                <NavLink href="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/dinosaurindex/">Meet the Eligible Fossils</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/dinosaurnew">
                  Add a New Dinosaur
                </NavLink>
              </NavItem>
            </Nav>
            <br/>
            <br/>
            <br/>
            <NavbarText>Hurry, don't wait for a mass extinction event!</NavbarText>
          </Collapse>
        </Navbar>
      </header>
    </>
  )
}

export default Header