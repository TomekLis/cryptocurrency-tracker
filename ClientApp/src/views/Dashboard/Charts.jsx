import React, { useEffect } from "react";
import PropTypes from "prop-types";
// @material-ui/core
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridItem from "../../components/Grid/GridItem.jsx";
import GridContainer from "../../components/Grid/GridContainer.jsx";
import Card from "../../components/Card/Card.jsx";
import CardHeader from "../../components/Card/CardHeader.jsx";
import CardBody from "../../components/Card/CardBody.jsx";
import Table from "../../components/Table/Table.jsx";
import { Link } from "react-router-dom";

import CircularProgress from "@material-ui/core/CircularProgress";

import dashboardStyle from "../../assets/jss/material-dashboard-react/views/dashboardStyle.jsx";
import { connect } from "react-redux";
import { addChartActions } from "./actions/addChartActions";
import { withRouter } from "react-router-dom";

const Charts = ({ classes, chartData, dispatch }) => {
  useEffect(() => {
    dispatch(addChartActions.getUsersCharts());
  }, []);

  const { loadingCharts } = chartData;

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          {loadingCharts ? (
            <CircularProgress />
          ) : (
            <Card>
              <CardHeader color="primary">
                <h4 className={classes.cardTitleWhite}>User's charts</h4>
              </CardHeader>
              <CardBody>
                <Table
                  tableHeaderColor="primary"
                  tableHead={[
                    "Chart name",
                    "Starting date",
                    "Ending date",
                    "Cryptocurrency"
                  ]}
                  tableData={chartData.charts
                    .map(x => Object.values(x))
                    .map(x => [
                      <Link key={x[0]} to={`chart/${x[0]}`}>
                        {x[1]}
                      </Link>,
                      ...x.splice(2)
                    ])}
                />
              </CardBody>
            </Card>
          )}
        </GridItem>
      </GridContainer>
    </div>
  );
};

Charts.propTypes = {
  classes: PropTypes.object.isRequired,
  chartData: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    chartData: state.chart
  };
};

const connectedCharts = withRouter(
  connect(mapStateToProps)(withStyles(dashboardStyle)(Charts))
);
export { connectedCharts as ChartsPage };
