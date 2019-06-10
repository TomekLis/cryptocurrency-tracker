import React, { Component } from "react";
import BarChart from "@material-ui/icons/BarChart";
import AddBox from "@material-ui/icons/AddBox";
import AttachMoney from "@material-ui/icons/AttachMoney";
import Add from "@material-ui/icons/Add";
import Sidebar from "./Sidebar/Sidebar";
import "./NavMenu.css";
import { userActions } from "../authentication";
import logo from "../assets/img/bitcoin-logo.png";
import image from "../assets/img/sidebar-2.jpg";

const dashboardRoutes = [
  {
    path: "/",
    name: "Charts",
    icon: BarChart
  },
  {
    path: "/addChart",
    name: "Add Chart",
    icon: AddBox
  },
  {
    path: "/investments",
    name: "Investments",
    icon: AttachMoney
  },
  {
    path: "/addInvestment",
    name: "Add investment",
    icon: Add
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

  handleClick() {
    userActions.logout();
  }

  render() {
    return (
      <Sidebar
        routes={dashboardRoutes}
        logoText={"CRYPTO TRACKER"}
        logo={logo}
        image={this.state.image}
        handleDrawerToggle={this.handleDrawerToggle}
        open={this.state.mobileOpen}
        color={this.state.color}
      />
    );
  }
}
