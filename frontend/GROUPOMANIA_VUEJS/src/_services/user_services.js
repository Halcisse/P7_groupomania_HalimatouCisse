import Axios from "./caller_services";

let getAllUsers = () => {
  return Axios.get("/user");
};
export const userServices = {
  getAllUsers,
};
