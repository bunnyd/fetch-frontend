export const userService = {
  login,
  logout
};

function login(email, password) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      owner: {
        email: email,
        password: password
      }
    })
  };

  return fetch("http://localhost:3000/login", requestOptions)
    .then(handleResponse)
    .then(user => {
      // login successful if there's a jwt token in the response
      if (user.jwt) {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        // localStorage.setItem("user-id", JSON.stringify(user.owner.id));

        localStorage.setItem("jwt", user.jwt);
        // localStorage.setItem(
        //   "user-fname",
        //   JSON.stringify(user.owner.first_name)
        // );
        // localStorage.setItem(
        //   "user-lname",
        //   JSON.stringify(user.owner.last_name)
        // );
        // localStorage.setItem("user-zip", JSON.stringify(user.owner.zip_code));
      }

      return user;
    });
}

function logout() {
  // remove user from local storage to log user out
  localStorage.removeItem("jwt");

  // localStorage.removeItem("user-id");
  // localStorage.removeItem("user-fname");
  // localStorage.removeItem("user-lname");
  // localStorage.removeItem("user-zip");
}

// function getById(id) {
//   const requestOptions = {
//     method: "GET",
//     headers: authHeader()
//   };
//
//   return fetch(`${config.apiUrl}/users/${id}`, requestOptions).then(
//     handleResponse
//   );
// }

function handleResponse(response) {
  return response.text().then(text => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        // auto logout if 401 response returned from api
        logout();
      }

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}
