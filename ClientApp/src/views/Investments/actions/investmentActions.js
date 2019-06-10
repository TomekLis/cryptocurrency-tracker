import { investmentConstants } from "../../../constants";
import { investmentServices } from "../services/investmentServices";
import { push } from "react-router-redux";

export const investmentActions = {
  createInvestment,
  getUsersInvestments
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

function getUsersInvestments() {
  return dispatch => {
    dispatch(requestGetUsersInvestments());

    investmentServices.getUsersInvestments().then(
      response => {
        dispatch(successGetUsersInvestments(response));
      },
      error => {
        dispatch(errorGetUsersInvestments(error));
        dispatch(push("/login"));
      }
    );
  };
}

function requestCreateInvestment() {
  return { type: investmentConstants.CREATE_INVESTMENT_REQUEST };
}
function successCreateInvestment() {
  return { type: investmentConstants.CREATE_INVESTMENT_SUCCESS };
}
function errorCreateInvestment() {
  return { type: investmentConstants.CREATE_INVESTMENT_ERROR };
}

function requestGetUsersInvestments() {
  return { type: investmentConstants.INVESTMENT_DATA_REQUEST };
}
function successGetUsersInvestments(response) {
  return { type: investmentConstants.INVESTMENT_DATA_SUCCESS, data: response };
}
function errorGetUsersInvestments() {
  return { type: investmentConstants.INVESTMENT_DATA_ERROR };
}
