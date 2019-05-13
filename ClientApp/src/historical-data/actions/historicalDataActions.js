import { historicalDataConstants } from "../../constants";
import { historicalDataService } from "../services/historicalDataService";

export const historicalDataActions = {
    getHistoricalData
};

function getHistoricalData() {
    return dispatch => {
        dispatch(requestHistoricalData());

        historicalDataService.getHistoricalData()
            .then(
                response => {
                    dispatch(success(response));
                    // history.push("/");
                },
                error => {
                    console.log(error)
                    // dispatch(failure(error));
                    // dispatch(alertActions.error(error));
                }
            );
    };

    function requestHistoricalData() {
        return { type: historicalDataConstants.HISTORICAL_DATA_REQUEST };
    }
    function success(response) {
        return { type: historicalDataConstants.HISTORICAL_DATA_SUCCESS, data: response };
    }
}