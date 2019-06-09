import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
// import { historicalDataActions } from "../actions/historicalDataActions";
// import ConfigurableChart from "../../../charts/ConfigurableChart";
// import { ClipLoader } from "react-spinners";

const override = `
    display: block;
    margin: 0 auto;
    border-color: red;
`;

// const getHistoricalData = dispatch => {
//   useEffect(() => {
//     dispatch(historicalDataActions.getHistoricalData());
//   }, []);
// };

const Chart = ({ id, chart, historicalData, dispatch }) => {
  // console.log(id);
  // getHistoricalData(dispatch);
  // const { loadingData, data } = historicalData;
  // const values = data ? data.map(x => x.open) : null;
  // const labels = data
  //   ? data.map(x => new Date(x.time * 1000).toISOString().slice(0, 10))
  //   : null;
  // console.log(values);
  return (
    <div>{id}</div>
    // <Fragment>
    //   <div className="row">
    //     <div className="col-md-12">
    //       <div className="panel panel-default">
    //         {loadingData && data ? (
    //           <ClipLoader
    //             css={override}
    //             sizeUnit={"px"}
    //             size={150}
    //             color={"#123abc"}
    //             loading={loadingData}
    //           />
    //         ) : (
    //           <Fragment>
    //             <div className="panel-heading">
    //               <h3 className="panel-title">Panel title</h3>
    //             </div>
    //             <div className="panel-body">
    //               <ConfigurableChart
    //                 defalutValue={true}
    //                 startLine={2}
    //                 endLine={3}
    //                 data={{ labels: labels, data: values }}
    //               />
    //             </div>
    //           </Fragment>
    //         )}
    //       </div>
    //     </div>
    //   </div>
    // </Fragment>
  );
};

function mapStateToProps(state, ownProps) {
  const id = ownProps.match.params.id;
  const chart = state.chart.charts.find(x => x.id == id);
  return {
    id,
    chart,
    historicalData: state.historicalData
  };
}

const connectedChart = connect(mapStateToProps)(Chart);
export { connectedChart as Chart };
