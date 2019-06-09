import { investmentConstants } from "../../../constants";
import { investmentServices } from "../services/investmentServices";
import { push } from "react-router-redux";

export const investmentActions = {
  createInvestment
  //   getUsersCharts
};

function createInvestment(data) {
  return dispatch => {
    dispatch(requestCreateInvestment());

    investmentServices.createInvestment(data).then(
      response => {
        dispatch(successCreateInvestment(response));
      },
      error => {
        dispatch(errorCreateInvestment(error));
        dispatch(push("/login"));
      }
    );
  };
}

// function getUsersCharts() {
//   return dispatch => {
//     dispatch(requestGetUsersCharts());

//     chartService.getUsersCharts().then(
//       response => {
//         dispatch(successGetUsersCharts(response));
//       },
//       error => {
//         dispatch(errorGetUsersCharts(error));
//         dispatch(push("/login"));
//       }
//     );
//   };
// }

function requestCreateInvestment() {
  return { type: investmentConstants.CREATE_INVESTMENT_REQUEST };
}
function successCreateInvestment() {
  return { type: investmentConstants.CREATE_INVESTMENT_SUCCESS };
}
function errorCreateInvestment() {
  return { type: investmentConstants.CREATE_INVESTMENT_ERROR };
}

// function requestGetUsersCharts() {
//   return { type: investmentConstants.CHART_DATA_REQUEST };
// }
// function successGetUsersCharts(response) {
//   return { type: investmentConstants.CHART_DATA_SUCCESS, data: response };
// }
// function errorGetUsersCharts() {
//   return { type: investmentConstants.CHART_DATA_ERROR };
// }
