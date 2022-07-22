import Axios from "./caller_services";

let login = (Credentials) => {
  return Axios.post("/auth/login", Credentials);
};
let signup = (Credentials) => {
  // sessionStorage.setItem("users", userCard);
  return Axios.post("/auth/signup", Credentials);
};

let logout = () => {
  sessionStorage.removeItem("token");
  sessionStorage.removeItem("users");
  sessionStorage.removeItem("id");
  sessionStorage.removeItem("post");
  window.location.reload();
};

let getToken = () => {
  return sessionStorage.getItem("token");
};

let isLogged = () => {
  let token = sessionStorage.getItem("token");
};

export const accountServices = {
  login,
  signup,
  logout,
  getToken,

  isLogged,
};
