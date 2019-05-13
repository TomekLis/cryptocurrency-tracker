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

    return fetch(`${config.dataProviderApi}/histoday?fsym=BTC&tsym=USD&limit=100&toTs=${new Date().getTime()}`, requestOptions)
        .then(handleResponse)
}

function handleResponse(response) {
    console.log(response);
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                console.log(response)
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data.Data;
    });
}