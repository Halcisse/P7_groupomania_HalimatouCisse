// initialisation d'Axios
import axios from "axios";
import { accountServices } from "./account_services";
import { postsServices } from "./posts_services";

const Axios = axios.create({
  baseURL: "http://localhost:3000/api",
});

// on intercepte la req afin d'isoler le token
Axios.interceptors.request.use((request) => {
  let token = accountServices.getToken();

  if (token) {
    request.headers.authorization = "Bearer " + token; //ajout du token au header authorization
  }
  return request; // on relache la requete
});

export default Axios;
