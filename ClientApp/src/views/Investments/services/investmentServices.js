import { authHeader } from "../../../helpers";

export const investmentServices = {
  createInvestment,
  getUsersInvestments
};

const config = {
  apiUrl: "api/investment"
};

function createInvestment(data) {
  const authorization = authHeader();
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...authorization
    },
    body: JSON.stringify({ ...data })
  };

  return fetch(`${config.apiUrl}/createInvestment`, requestOptions).then(
    handleResponse
  );
}

function getUsersInvestments() {
  const authorization = authHeader();
  const requestOptions = {
    method: "GET",
    // headers: { "Content-Type": "application/json",  },
    headers: {
      "Content-Type": "application/json",
      ...authorization
    }
  };

  return fetch(`${config.apiUrl}/usersInvestments`, requestOptions).then(
    handleResponse
  );
}

function handleResponse(response) {
  return response.text().then(text => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      // eslint-disable-next-line no-empty
      if (response.status === 401) {
      }

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}
