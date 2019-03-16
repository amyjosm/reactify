import React, { useState } from "react";
import { connect } from "react-redux";
import { changeModal } from "../../state/modal/actions";
import { Link } from "react-router-dom";
import {
  Navbar as Nav,
  NavbarBrand,
  NavbarItem,
  NavbarBurger,
  NavbarMenu,
  NavbarStart,
  NavbarEnd,
  Button
} from "bloomer";

function Navbar(props) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <Nav>
      <NavbarBrand>
        <NavbarItem>
          <h1>Reactify!</h1>
        </NavbarItem>

        <NavbarBurger onClick={() => setMenuOpen(!menuOpen)} />
      </NavbarBrand>

      <NavbarMenu isActive={menuOpen}>
        <NavbarStart>
          <Link onClick={() => setMenuOpen(false)} to="/" className="navbar-item">
            Home
          </Link>
          <Link onClick={() => setMenuOpen(false)} to="/documentation" className="navbar-item">
            Documentation
          </Link>
          <Link onClick={() => setMenuOpen(false)} to="/react-examples" className="navbar-item">
            React Examples
          </Link>
        </NavbarStart>
        <NavbarEnd>
          <NavbarItem>
            <div className="buttons">
              <Button onClick={props.signUpModal} isColor="primary">
                <strong>Sign up</strong>
              </Button>
              <Button onClick={props.loginModal} isColor="light">
                Log in
              </Button>
            </div>
          </NavbarItem>
        </NavbarEnd>
      </NavbarMenu>
    </Nav>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    loginModal() {
      dispatch(changeModal("LoginModal"));
    },
    signUpModal() {
      dispatch(changeModal("SignUpModal"));
    }
  };
}

export default connect(
  null,
  mapDispatchToProps
)(Navbar);
