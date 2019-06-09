import React, { Component } from "react";
import { ChartsPage } from "../views/Dashboard/Charts";
export class Home extends Component {
  displayName = Home.name;

  render() {
    return <ChartsPage />;
  }
}
