import Axios from "./caller_services";

let login = (Credential) => {
  return Axios.post("/auth/login", Credential);
};
let signup = (Credential) => {
  return Axios.post("/auth/signup", Credential);
};

let logout = () => {
  localStorage.removeItem("token");
};

let getToken = () => {
  return localStorage.getItem("token");
};
let saveToken = (token) => {
  localStorage.setItem("token", token);
};
let isLogged = () => {
  let token = localStorage.getItem("token");
  return !!token; // !! token transforme la variable en boolean, soit false si pas de token
};

export const accountServices = {
  login,
  signup,
  logout,
  getToken,
  saveToken,
  isLogged,
};
