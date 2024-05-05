import React, { Component } from "react";
import { Container, Form, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

export class Header extends Component {
  render() {
    return (
      <div>
        {" "}
        <Navbar expand="lg" className="bg-primary ">
          <Container fluid className="d-flex gap-4 align-items-center">
            <Link className="fs-3 text-white text-decoration-none fw-bold ">
              News Api
            </Link>
            <Navbar.Toggle aria-controls="navbarScroll" className="bg-white" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto  align-items-center justify-content-center gap-3  "
                style={{ minHeight: "100px" }}
                navbarScroll
              >
                <NavLink className="text-white text-decoration-none" to="/">
                  Home
                </NavLink>
                <NavLink
                  className="text-white text-decoration-none"
                  to="/business"
                >
                  Business
                </NavLink>

                <NavLink
                  className="text-white text-decoration-none"
                  to="/entertainment"
                >
                  Entertainment
                </NavLink>
                <NavLink
                  className="text-white text-decoration-none"
                  to="/general"
                >
                  General
                </NavLink>
                <NavLink
                  className="text-white text-decoration-none"
                  to="/health"
                >
                  Health
                </NavLink>
                <NavLink
                  className="text-white text-decoration-none"
                  to="/science"
                >
                  Science
                </NavLink>
                <NavLink
                  className="text-white text-decoration-none"
                  to="/sports"
                >
                  Sports
                </NavLink>
                <NavLink
                  className="text-white text-decoration-none"
                  to="/technology"
                >
                  Technology
                </NavLink>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default Header;
