// import React from 'react'

// const Header = () => {
//   return (
//     <>
//         <h1>Dinosaur Tinder</h1>
//     </>
//   )
// }

// export default Header
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
                 <Navbar {...args}>
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
        
                    <h4>Just when you thought love had gone extinct...</h4>

                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="me-auto" navbar>
                            <NavItem>
                                <NavLink href="/">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/dinosaurindex/">Meet the Eligable Fossils</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/dinosaurnew">
                                    Add a New Dinosaur
                                </NavLink>
                            </NavItem>
                        </Nav>
                        <br/>
                        <br/>
                        <NavbarText>Just when you thought love had gone extinct...</NavbarText>
                    </Collapse>
                </Navbar>
            </header>
        </>
    )
}

export default Header