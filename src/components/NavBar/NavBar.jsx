import React,{useState} from 'react';
import './NavBar.scss';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../../assets/images/logo.svg';
import { Link, animateScroll as scroll } from "react-scroll";



export const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg"  variant="light">
      <Container>
        <Navbar.Brand href="#home" > <img src={Logo} alt="logo"/> </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav>
            <Link 
              to="home"
              className="nav-link"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              HOME
            </Link>
            <Link 
              to="projects"
              className="nav-link"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              activeClass="active"
            >
              PROJECT
            </Link>
            <Link 
              to="services"
              className="nav-link"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              activeClass="active"
              >
                SERVICES
              </Link>
            <Link 
              to="about"
              className="nav-link"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              activeClass="active"
            >
              ABOUT
            </Link>
            <Link 
              to="blog"
              className="nav-link"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              activeClass="active"
            >
              BLOG
            </Link>
            <Link 
              to="shop"
              className="nav-link"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              activeClass="active"
            >
              SHOP
            </Link>
            <Link 
              to="contact"
              className="nav-link"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              activeClass="active"
            >
              CONTACT
            </Link>
          </Nav>
          <Link 
            className="nav__button" 
            to="form"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            activeClass="active"
          >
            Sing Up
          </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
