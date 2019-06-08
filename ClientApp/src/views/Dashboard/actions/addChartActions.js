import { chartDataConstants } from "../../../constants";
import { chartService } from "../services/addChartService";

export const addChartActions = {
  createChart
};

function createChart(data) {
  return dispatch => {
    dispatch(requestAddChart());

    chartService.createChart(data).then(
      response => {
        console.log(response);
        dispatch(successAddChart(response));
        // history.push("/");
      },
      error => {
        console.log(error);
        dispatch(errorAddChart(error));
        // dispatch(alertActions.error(error));
      }
    );
  };

  function requestAddChart() {
    return { type: chartDataConstants.ADD_CHART_REQUEST };
  }
  function successAddChart() {
    return { type: chartDataConstants.CHART_DATA_SUCCESS };
  }
  function errorAddChart() {
    return { type: chartDataConstants.CHART_DATA_ERROR };
  }
  // function success(response) {
  //   return {
  //     type: addChartConstants.HISTORICAL_DATA_SUCCESS,
  //     data: response
  //   };
  // }
}
