import { Container, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar className="bg-primary-subtle">
      <Container>
        <NavLink className="navbar-brand text-primary-emphasis" to="/">
          Calorie tracker
        </NavLink>
      </Container>
    </Navbar>
  );
};

export default NavBar;
