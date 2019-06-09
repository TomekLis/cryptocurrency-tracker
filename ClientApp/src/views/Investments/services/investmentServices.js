import { authHeader } from "../../../helpers";

export const investmentServices = {
  createInvestment
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

// function getUsersCharts() {
//   const authorization = authHeader();
//   const requestOptions = {
//     method: "GET",
//     // headers: { "Content-Type": "application/json",  },
//     headers: {
//       "Content-Type": "application/json",
//       ...authorization
//     }
//   };

//   return fetch(`${config.apiUrl}/usersCharts`, requestOptions).then(
//     handleResponse
//   );
// }

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
