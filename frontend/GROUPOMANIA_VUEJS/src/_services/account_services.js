import Axios from "./caller_services";

let login = (Credentials) => {
  return Axios.post("/auth/login", Credentials);
};
let signup = (Credentials) => {
  return Axios.post("/auth/signup", Credentials);
};

let logout = () => {
  sessionStorage.removeItem("token");
  window.location.reload();
};

let getToken = () => {
  return sessionStorage.getItem("token");
};
// let saveToken = (token) => {
//   sessionStorage.setItem("token", token);
// };
// let isLogged = () => {
//   let token = sessionStorage.getItem("token");

// };

export const accountServices = {
  login,
  signup,
  logout,
  getToken,
  // saveToken,
  // isLogged,
};
