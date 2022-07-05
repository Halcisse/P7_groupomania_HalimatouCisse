import router from "../router";

export function authGuard(to) {
  let token = localStorage.getItem("token");
  console.log(token);

  //Si le token est bien présent = user connecté
  if (token) {
    return true;
  }
  router.push("/");
}
