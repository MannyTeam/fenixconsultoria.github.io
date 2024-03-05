import { useState } from 'react';
import { Nav, Navbar } from "react-bootstrap";
import { NavDropdownStyled, TitleStyled } from "./navBar.styles";
import { NavLinkComponent } from './NavLink';
import { NavLink } from 'react-router-dom';

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleNavbar = () => {
    setIsOpen(false)
  };

  const handleNavLinkClick = () => {
    setIsOpen(false);
  };
    return (
        <Navbar expand="lg" style={{ boxShadow: 'none', padding: '0px' }} expanded={isOpen} collapseOnSelect>
            <Navbar.Brand>
              <Nav.Link
                style={{ padding: '0px' }}
                as={NavLink}
                to={'/'}
              >
                <TitleStyled> F&eacute;nix Consultor&iacute;a </TitleStyled>
              </Nav.Link>
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              onClick={() => setIsOpen(!isOpen)}
              style={{ color: '#f1f7fd' }}
            />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto" onSelect={handleNavbar}>
            <NavLinkComponent 
              text='Inicio'
              closeNavbar={handleNavLinkClick}
            />
            <NavLinkComponent 
              text='Nosotros'
              route='aboutus'
              closeNavbar={handleNavLinkClick}
            />
            <NavDropdownStyled title="Servicios" id="basic-nav-dropdown">
                <NavLinkComponent 
                  text='Tramites' 
                  route="procedures" 
                  closeNavbar={handleNavLinkClick}
                />
                <NavLinkComponent
                  text='Proyectos'
                  route='projects'
                  closeNavbar={handleNavLinkClick}
                />
                <NavLinkComponent
                  text='Seminarios, Cursos y Talleres'
                  route='seminars'
                  closeNavbar={handleNavLinkClick}
                />
            </NavDropdownStyled>
            <NavLinkComponent 
              text='Contacto'
              route='contact'
              closeNavbar={handleNavLinkClick}
            />
            </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
};