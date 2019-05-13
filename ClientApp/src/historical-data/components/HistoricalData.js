import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { historicalDataActions } from '../actions/historicalDataActions';

const getHistoricalData = (dispatch) => {
    useEffect(() => {
        dispatch(historicalDataActions.getHistoricalData());
    }, []);
}

const HistoricalData = ({ historicalData, dispatch }) => {
    console.log(historicalData)
    getHistoricalData(dispatch);

    return (
        // <Dashboard />
        <di>Hello</di>
    );
};

function mapStateToProps(state) {
    return {
        historicalData: state.historicalData
    }
    // const { loggingIn } = state.authentication;
    // return {
    //     loggingIn
    // };
}

const connectedHistoricalData = connect(mapStateToProps)(HistoricalData);
export { connectedHistoricalData as HistoricalData };
