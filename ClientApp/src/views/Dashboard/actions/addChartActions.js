import { chartDataConstants } from "../../../constants";
import { chartService } from "../services/addChartService";
import { push } from "react-router-redux";

export const addChartActions = {
  createChart,
  getUsersCharts
};

function createChart(data) {
  return dispatch => {
    dispatch(requestAddChart());

    chartService.createChart(data).then(
      response => {
        console.log(response);
        dispatch(successAddChart(response));
      },
      error => {
        console.log(error);
        dispatch(errorAddChart(error));
        dispatch(push("/login"));
      }
    );
  };
}

function getUsersCharts() {
  return dispatch => {
    dispatch(requestGetUsersCharts());

    chartService.getUsersCharts().then(
      response => {
        dispatch(successGetUsersCharts(response));
      },
      error => {
        dispatch(errorGetUsersCharts(error));
        dispatch(push("/login"));
      }
    );
  };
}

function requestAddChart() {
  return { type: chartDataConstants.ADD_CHART_REQUEST };
}
function successAddChart() {
  return { type: chartDataConstants.ADD_CHART_SUCCESS };
}
function errorAddChart() {
  return { type: chartDataConstants.ADD_CHART_ERROR };
}

function requestGetUsersCharts() {
  return { type: chartDataConstants.CHART_DATA_REQUEST };
}
function successGetUsersCharts(response) {
  return { type: chartDataConstants.CHART_DATA_SUCCESS, data: response };
}
function errorGetUsersCharts() {
  return { type: chartDataConstants.CHART_DATA_ERROR };
}
