import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import {
  Collapse,
  Navbar,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  NavbarBrand,
  NavbarText,
  NavbarToggler,
  NavItem,
  UncontrolledDropdown,
} from "reactstrap";
import TodoAppLogo from "../../assets/logos/todo-app-logo.svg";
import { AuthContext } from "../../context/authContext";
import { getDataFromStorage } from "../../hooks/useAuth";

const MahonNavbar = () => {
  const { userName, logout } = useContext(AuthContext);

  return (
    <Navbar className="card-background-custom" expand light>
      <NavbarBrand href="/"></NavbarBrand>
      <NavbarToggler onClick={function noRefCheck() {}} />
      <Collapse navbar>
        <Nav className="ms-auto" navbar>
          <UncontrolledDropdown inNavbar nav>
            <DropdownToggle caret nav>
              <b>{userName || getDataFromStorage()?.userName}</b>
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem onClick={logout}>Logout</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export { MahonNavbar };
