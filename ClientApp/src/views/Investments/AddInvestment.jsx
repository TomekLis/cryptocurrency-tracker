import React from "react";
// core components
import GridItem from "../../components/Grid/GridItem.jsx";
import GridContainer from "../../components/Grid/GridContainer.jsx";
import AddInvestmentForm from "./AddInvestmentForm.jsx";
import { connect } from "react-redux";
import { investmentActions } from "./actions/investmentActions";
import { withRouter } from "react-router-dom";
import withStyles from "@material-ui/core/styles/withStyles";
import dashboardStyle from "../../assets/jss/material-dashboard-react/views/dashboardStyle.jsx";

// eslint-disable-next-line react/prop-types
const AddInvestment = ({ classes, dispatch }) => {
  const submit = values => {
    dispatch(investmentActions.createInvestment(values));
  };

  return (
    <div>
      <GridContainer justify="flex-end">
        <GridItem xs={12} sm={12} md={12}>
          <AddInvestmentForm classes={classes} onSubmit={submit} />
        </GridItem>
      </GridContainer>
    </div>
  );
};

const connectedAddInvestement = withRouter(
  connect(null)(withStyles(dashboardStyle)(AddInvestment))
);
export { connectedAddInvestement as AddInvestment };
