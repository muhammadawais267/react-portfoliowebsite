import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import './AppBar.css';

function AppBar() {
  return (
    <Container>
      <Navbar
        collapseOnSelect
        expand='lg'
        bg='dark'
        variant='dark'
        className='navbar-1'
        sticky='top'
      >
        {/* <Navbar.Brand href='#home'></Navbar.Brand> */}
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          {/* <Nav className='mr-auto'>
              <Nav.Link href='#features'>Features</Nav.Link>
              <Nav.Link href='#pricing'>Pricing</Nav.Link>
              <NavDropdown title='Dropdown' id='collasible-nav-dropdown'>
                <NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
                <NavDropdown.Item href='#action/3.2'>
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href='#action/3.3'>
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href='#action/3.4'>
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav> */}
          <Nav className='mr-auto navbar-style '>
            <Nav.Link className='current-home' href='#home'>
              Home
            </Nav.Link>
            <Nav.Link eventKey={2} href='about'>
              About
            </Nav.Link>
            <Nav.Link href='#service'>Service</Nav.Link>
            <Nav.Link eventKey={2} href='#portfolio'>
              Portfolio
            </Nav.Link>
            <Nav.Link href='#skills'>Skills</Nav.Link>
            <Nav.Link eventKey={2} href='#page'>
              Page
            </Nav.Link>
            <Nav.Link eventKey={2} href='#contact'>
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
}

export default AppBar;
