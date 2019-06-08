import React, { Component } from "react";
import { DashboardPage } from "../views/Dashboard/Dashboard";
export class Home extends Component {
  displayName = Home.name;

  render() {
    return <DashboardPage />;
  }
}
