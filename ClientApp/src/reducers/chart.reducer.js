import { chartDataConstants } from "../constants";

const initialState = {
  loadingChart: false,
  charts: [],
  addingChart: false
};

export function chartData(state = initialState, action) {
  switch (action.type) {
    case chartDataConstants.HISTORICAL_DATA_SUCCESS:
      return {
        loadingData: true,
        data: []
      };
    case chartDataConstants.HISTORICAL_DATA_SUCCESS:
      return {
        loadingData: false,
        data: action.data
      };
    case chartDataConstants.HISTORICAL_DATA_FAILURE:
      return {
        loadingData: false
      };
    default:
      return state;
  }
}
