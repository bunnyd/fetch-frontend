export const userService = {
  login,
  logout
};

function login(email, password) {
  // return fetch("https://nameless-everglades-31188.herokuapp.com/login", {

  return fetch("http://localhost:3000/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      owner: {
        email: email,
        password: password
      }
    })
  })
    .then(handleResponse)
    .then(user => {
      // login successful if there's a jwt token in the response
      if (user.jwt) {
        localStorage.setItem("jwt", user.jwt);
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

function register(user) {
  return fetch("https://nameless-everglades-31188.herokuapp.com/owners", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user)
  }).then(handleResponse);
}

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
