import { useContext } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../ContextApi/AuthContext";

const NavMenu = () => {
  const { isLoggedIn, changeAuthStatus } = useContext(AuthContext);
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <NavLink exact to="/" style={{ margin: "0 15px" }}>
                Home
              </NavLink>
              <NavLink exact to="/lifecycle" style={{ margin: "0 15px" }}>
                lifecycle
              </NavLink>
              <NavLink exact to="/hook" style={{ margin: "0 15px" }}>
                hooks
              </NavLink>
              <NavLink exact to="/contextApi" style={{ margin: "0 15px" }}>
                ContextApi
              </NavLink>
              <NavLink exact to="/contextConsumer" style={{ margin: "0 15px" }}>
                Consumer
              </NavLink>
              <Button variant="secondary" onClick={changeAuthStatus}>
                {isLoggedIn ? "Login" : "Logout"}
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavMenu;
