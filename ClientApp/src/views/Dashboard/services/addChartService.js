/* eslint-disable no-console */
// import config from 'config';
import { authHeader } from "../../../helpers";

export const chartService = {
  createChart,
  getUsersCharts
};

const config = {
  apiUrl: "api/chart"
};

function createChart(data) {
  const authorization = authHeader();
  const requestOptions = {
    method: "POST",
    // headers: { "Content-Type": "application/json",  },
    headers: {
      "Content-Type": "application/json",
      ...authorization
    },
    body: JSON.stringify({ ...data })
  };

  return fetch(`${config.apiUrl}/createChart`, requestOptions).then(
    handleResponse
  );
}

function getUsersCharts() {
  const authorization = authHeader();
  const requestOptions = {
    method: "GET",
    // headers: { "Content-Type": "application/json",  },
    headers: {
      "Content-Type": "application/json",
      ...authorization
    }
  };

  return fetch(`${config.apiUrl}/usersCharts`, requestOptions).then(
    handleResponse
  );
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

    return data;
  });
}
