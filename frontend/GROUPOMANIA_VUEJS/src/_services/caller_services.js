// initialisation d'Axios

//les modules
import axios from "axios";
import { accountServices } from "./account_services";
import router from "@/router";

const Axios = axios.create({
  baseURL: "http://localhost:3000/api",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "*",
    "Access-Control-Allow-Credentials": "true",
  },
});

/**
 * Interceptor pour injection token
 */
Axios.interceptors.request.use((request) => {
  // Si connecté on ajoute le token dans l'entête
  if (accountServices.isLogged()) {
    request.headers.Authorization = "Bearer " + accountServices.getToken();
  }

  return request;
});

export default Axios;
