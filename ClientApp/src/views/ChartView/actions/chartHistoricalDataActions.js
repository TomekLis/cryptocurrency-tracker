import { historicalDataConstants } from "../../../constants";
import { historicalDataService } from "../services/chartHistoricalDataService";

export const historicalDataActions = {
  getHistoricalData
};

function getHistoricalData(chart) {
  return dispatch => {
    dispatch(requestHistoricalData());

    historicalDataService.getHistoricalData(chart).then(response => {
      dispatch(success(response));
    });
  };

  function requestHistoricalData() {
    return { type: historicalDataConstants.HISTORICAL_DATA_REQUEST };
  }
  function success(response) {
    return {
      type: historicalDataConstants.HISTORICAL_DATA_SUCCESS,
      data: response
    };
  }
}
