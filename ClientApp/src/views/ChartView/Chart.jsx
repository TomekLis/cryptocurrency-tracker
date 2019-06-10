import React, { useEffect } from "react";
import { connect } from "react-redux";
import GridItem from "../../components/Grid/GridItem.jsx";
import GridContainer from "../../components/Grid/GridContainer.jsx";
import Card from "../../components/Card/Card.jsx";
import CardHeader from "../../components/Card/CardHeader.jsx";
import CardBody from "../../components/Card/CardBody.jsx";
import CardFooter from "../../components/Card/CardFooter.jsx";
import ConfigurableChart from "../../charts/ConfigurableChart";
import { historicalDataActions } from "./actions/chartHistoricalDataActions";
import CircularProgress from "@material-ui/core/CircularProgress";

const getHistoricalData = (dispatch, chart) => {
  useEffect(() => {
    dispatch(historicalDataActions.getHistoricalData(chart));
  }, []);
};

// eslint-disable-next-line react/prop-types
const Chart = ({ chart, historicalData, dispatch }) => {
  getHistoricalData(dispatch, chart);
  const { loadingData, data } = historicalData;
  const values = data ? data.map(x => x.open) : null;
  const labels = data
    ? data.map(x => new Date(x.time * 1000).toISOString().slice(0, 10))
    : null;
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card chart>
          <CardHeader color="success">
            <h1>{chart.chartName}</h1>
          </CardHeader>
          <CardBody>
            {loadingData ? (
              <CircularProgress />
            ) : (
              <ConfigurableChart
                label={`${chart.cryptocurrency} price in USD`}
                defalutValue={true}
                startLine={2}
                endLine={3}
                data={{ labels: labels, data: values }}
              />
            )}
          </CardBody>
          <CardFooter chart />
        </Card>
      </GridItem>
    </GridContainer>
  );
};

function mapStateToProps(state, ownProps) {
  const id = ownProps.match.params.id;
  const chart = state.chart.charts.find(x => x.id == id);
  return {
    chart,
    historicalData: state.historicalData
  };
}

const connectedChart = connect(mapStateToProps)(Chart);
export { connectedChart as Chart };
