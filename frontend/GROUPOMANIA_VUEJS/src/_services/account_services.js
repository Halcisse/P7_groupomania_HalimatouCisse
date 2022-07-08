import Axios from "./caller_services";

let login = (Credential) => {
  return Axios.post("/auth/login", Credential);
};
let signup = (Credential) => {
  return Axios.post("/auth/signup", Credential);
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
