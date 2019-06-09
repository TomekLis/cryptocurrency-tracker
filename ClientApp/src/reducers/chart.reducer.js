import { chartDataConstants } from "../constants";

const initialState = {
  loadingCharts: false,
  charts: [],
  addingChart: false
};

export function chartData(state = initialState, action) {
  switch (action.type) {
    case chartDataConstants.CHART_DATA_REQUEST:
      return {
        ...state,
        loadingCharts: true,
        data: []
      };
    case chartDataConstants.CHART_DATA_SUCCESS:
      return {
        ...state,
        loadingCharts: false,
        charts: action.data
      };
    case chartDataConstants.CHART_DATA_ERROR:
      return {
        ...state,
        loadingCharts: false
      };
    default:
      return state;
  }
}
