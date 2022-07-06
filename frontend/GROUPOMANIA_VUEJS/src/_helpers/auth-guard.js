import router from "../router";

export function authGuard(to) {
  let token = sessionStorage.getItem("token");
  //Si le token est bien présent = user connecté
  if (token && token != "" && token != null && token != undefined) {
    return true;
  }
  router.push("/login");
}
