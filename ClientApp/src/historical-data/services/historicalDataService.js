// import config from 'config';
import { authHeader } from '../../helpers';

export const historicalDataService = {
    getHistoricalData
};

const config = {
    dataProviderApi: 'https://min-api.cryptocompare.com/data'
}

function getHistoricalData() {
    const requestOptions = {
        method: 'GET',
        headers: { 'authorization': 'Apikey 9b19040948791a2d14d0d2648b9b4869b0d3cab5b0364b9e0c5948c16bbfa706' },
    };

    return fetch(`${config.dataProviderApi}/histohour?fsym=BTC&tsym=USD&limit=10`, requestOptions)
        .then(handleResponse)
        .then(data => data);
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}

function handleResponse(response) {
    console.log(response);
    // return response.text().then(text => {
    //     const data = text && JSON.parse(text);
    //     if (!response.ok) {
    //         if (response.status === 401) {
    //             // auto logout if 401 response returned from api
    //             logout();
    //             window.location.reload(true);
    //         }

    //         const error = (data && data.message) || response.statusText;
    //         return Promise.reject(error);
    //     }

    //     return data;
    // });
}