import React from "react";
import PropTypes from "prop-types";
// @material-ui/core
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridItem from "../../components/Grid/GridItem.jsx";
import GridContainer from "../../components/Grid/GridContainer.jsx";
import { connect } from "react-redux";

import dashboardStyle from "../../assets/jss/material-dashboard-react/views/dashboardStyle.jsx";
import AddChartForm from "./AddChartForm.jsx";
import { addChartActions } from "./actions/addChartActions";

const AddChartPage = ({ classes, dispatch }) => {
  const submit = values => {
    // print the form values to the console
    dispatch(addChartActions.createChart(values));
  };

  return (
    <div>
      <GridContainer justify="flex-end">
        <GridItem xs={12} sm={12} md={12}>
          <AddChartForm onSubmit={submit} classes={classes} />
        </GridItem>
      </GridContainer>
    </div>
  );
};

AddChartPage.propTypes = {
  classes: PropTypes.object.isRequired,
  chartData: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
};

export default connect(null)(withStyles(dashboardStyle)(AddChartPage));
