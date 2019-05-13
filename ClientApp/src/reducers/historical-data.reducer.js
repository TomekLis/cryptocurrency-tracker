import { historicalDataConstants } from '../constants';

const initialState = { loadingData: false, data: [] };

export function historicalData(state = initialState, action) {
    switch (action.type) {
        case historicalDataConstants.HISTORICAL_DATA_REQUEST:
            return {
                loadingData: true,
                data: []
            };
        case historicalDataConstants.HISTORICAL_DATA_SUCCESS:
            return {
                loadingData: false,
                data: action.data
            };
        case historicalDataConstants.HISTORICAL_DATA_FAILURE:
            return {
                loadingData: false,
            };
        default:
            return state
    }
}