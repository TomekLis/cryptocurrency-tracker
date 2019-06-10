import React, { useEffect } from "react";
import PropTypes from "prop-types";
// @material-ui/core
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridItem from "../../components/Grid/GridItem.jsx";
import GridContainer from "../../components/Grid/GridContainer.jsx";
import Card from "../../components/Card/Card.jsx";
import CardHeader from "../../components/Card/CardHeader.jsx";
import CardIcon from "../../components/Card/CardIcon.jsx";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import ArrowDownward from "@material-ui/icons/ArrowDownward";

import CircularProgress from "@material-ui/core/CircularProgress";
import CardBody from "../../components/Card/CardBody.jsx";

import dashboardStyle from "../../assets/jss/material-dashboard-react/views/dashboardStyle.jsx";
import { connect } from "react-redux";
import { investmentActions } from "./actions/investmentActions";
import { withRouter } from "react-router-dom";

const group = function(array, chunk) {
  var index = 0;
  var arrayLength = array.length;
  var tempArray = [];

  for (index = 0; index < arrayLength; index += chunk) {
    const myChunk = array.slice(index, index + chunk);
    // Do something if you want with the group
    tempArray.push(myChunk);
  }
  return tempArray;
};

const InvestmentsPage = ({ classes, investmentData, dispatch }) => {
  useEffect(() => {
    dispatch(investmentActions.getUsersInvestments());
  }, []);

  const { loadingInvestments, investments } = investmentData;

  const chunkedInvestments =
    investments && investments.length ? group(investments, 3) : [];

  return loadingInvestments ? (
    <CircularProgress />
  ) : (
    chunkedInvestments.map((chunkedInvestmentGroup, x) => (
      <GridContainer key={x}>
        {chunkedInvestmentGroup.map(investment => (
          <GridItem key={investment.name} xs={12} sm={12} md={4}>
            <Card>
              <CardHeader stats icon>
                <CardIcon
                  color={investment.revenueFraction > 0 ? "success" : "danger"}
                >
                  {investment.revenueFraction > 0 ? (
                    <ArrowUpward />
                  ) : (
                    <ArrowDownward />
                  )}
                </CardIcon>
                <p className={classes.cardCategory}>Revenue</p>
                <h4 className={classes.cardTitle}>
                  $ {(investment.revenue - investment.value).toFixed(2)}
                </h4>
              </CardHeader>
              <CardBody stats>
                <GridContainer>
                  <GridItem key={investment.name} xs={12} sm={12} md={6}>
                    <div className={classes.stats}>{investment.name}</div>
                  </GridItem>
                  <GridItem key={investment.name} xs={12} sm={12} md={6}>
                    <div className={classes.stats}>
                      Value chagne <br /> {"% "}
                      {(investment.revenueFraction * 100).toFixed(4)}
                    </div>
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem key={investment.name} xs={12} sm={12} md={6}>
                    <div className={classes.stats}>
                      Cryptocurrency <br />{investment.cryptocurrency}
                    </div>{" "}
                  </GridItem>
                  <GridItem key={investment.name} xs={12} sm={12} md={6}>
                    <div className={classes.stats}>
                      Investment value <br />$ {investment.value.toFixed(2)}
                    </div>
                  </GridItem>
                </GridContainer>
              </CardBody>
            </Card>
          </GridItem>
        ))}
      </GridContainer>
    ))
  );
};

InvestmentsPage.propTypes = {
  classes: PropTypes.object.isRequired,
  investmentData: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    investmentData: state.investment
  };
};

const connectedInvestments = withRouter(
  connect(mapStateToProps)(withStyles(dashboardStyle)(InvestmentsPage))
);
export { connectedInvestments as InvestmentsPage };
