import { investmentConstants } from "../constants";

const initialState = {
  loadingInvestments: false,
  investments: []
};

export function investmentData(state = initialState, action) {
  switch (action.type) {
    case investmentConstants.INVESTMENT_DATA_REQUEST:
      return {
        ...state,
        loadingInvestments: true
      };
    case investmentConstants.INVESTMENT_DATA_SUCCESS:
      return {
        ...state,
        loadingInvestments: false,
        investments: action.data
      };
    case investmentConstants.INVESTMENT_DATA_ERROR:
      return {
        ...state,
        loadingInvestments: false
      };
    default:
      return state;
  }
}
