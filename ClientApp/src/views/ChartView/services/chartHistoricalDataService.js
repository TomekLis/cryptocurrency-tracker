/* eslint-disable no-console */
// import config from 'config';

export const historicalDataService = {
  getHistoricalData
};

const config = {
  dataProviderApi: "https://min-api.cryptocompare.com/data"
};

function getHistoricalData(chart) {
  const requestOptions = {
    method: "GET",
    headers: {
      authorization:
        "Apikey 9b19040948791a2d14d0d2648b9b4869b0d3cab5b0364b9e0c5948c16bbfa706"
    }
  };
  const endDate = new Date(chart.endDate).getTime() / 1000;
  const startDate = new Date(chart.startDate).getTime() / 1000;
  const daysDifference = (endDate - startDate) / 86400;
  console.log(chart);
  return fetch(
    `${config.dataProviderApi}/histoday?fsym=${
      chart.cryptocurrency
    }&tsym=USD&limit=${daysDifference}&aggregate=1&toTs=${endDate}`,
    requestOptions
  ).then(handleResponse);
}

function handleResponse(response) {
  console.log(response);
  return response.text().then(text => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        console.log(response);
      }

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data.Data;
  });
}
