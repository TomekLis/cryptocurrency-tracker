import React, { Component } from "react";
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import { Link } from "react-router-dom";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "./Sidebar/Sidebar";
import "./NavMenu.css";
import { userActions } from "../authentication";
import logo from "../assets/img/reactlogo.png";
import image from "../assets/img/sidebar-2.jpg";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: Dashboard,
    component: <div>elo</div>,
    layout: "/admin"
  },
  {
    path: "/user",
    name: "User Profile",
    rtlName: "ملف تعريفي للمستخدم",
    icon: Person,
    component: <div>elo</div>,
    layout: "/admin"
  }
];

export class NavMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: image,
      color: "blue",
      hasImage: true,
      fixedClasses: "dropdown show",
      mobileOpen: false
    };
  }

  displayName = NavMenu.name;

  handleClick(event) {
    userActions.logout();
  }

  render() {
    return (
      <Sidebar
        routes={dashboardRoutes}
        logoText={"Creative Tim"}
        logo={logo}
        image={this.state.image}
        handleDrawerToggle={this.handleDrawerToggle}
        open={this.state.mobileOpen}
        color={this.state.color}
      />
      // <Navbar>
      //   {/* <Navbar.Header>
      //     <Navbar.Brand>
      //       <Link to={'/'}>CryptocurrencyTracker</Link>
      //     </Navbar.Brand>
      //     <Navbar.Toggle />
      //   </Navbar.Header> */}
      //   <Navbar.Collapse>
      //     <Nav>
      //       <LinkContainer to={'/'} exact>
      //         <NavItem>
      //           <FontAwesomeIcon icon="check-square" />
      //           Home
      //          </NavItem>
      //       </LinkContainer>
      //       <LinkContainer to={'/statistics'}>
      //         <NavItem>
      //           <FontAwesomeIcon icon="check-square" />
      //           Statistics
      //          </NavItem>
      //       </LinkContainer>
      //       <LinkContainer to={'/investments'}>
      //         <NavItem>
      //           <FontAwesomeIcon icon="check-square" />
      //           Investments
      //          </NavItem>
      //       </LinkContainer>
      //       <NavItem onClick={this.handleClick.bind(this)}>
      //         <FontAwesomeIcon icon="check-square" />
      //         Log out
      //        </NavItem>
      //     </Nav>
      //   </Navbar.Collapse>
      // </Navbar>
    );
  }
}
