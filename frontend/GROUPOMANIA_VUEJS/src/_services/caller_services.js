// import des modules necessaires
import axios from "axios";
import { accountServices } from "./account_services";

const Axios = axios.create({
  baseURL: "http://localhost:3000/api",
});

Axios.interceptors.request.use((request) => {
  console.log("reqBEFORE", request);
  let token = accountServices.getToken();

  if (token) {
    request.headers.authorization = "Bearer " + token;
  }
  console.log("reqAfter", request);
  return request;
});

export default Axios;
