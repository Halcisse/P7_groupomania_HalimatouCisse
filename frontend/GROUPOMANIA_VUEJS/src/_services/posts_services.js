import Axios from "./caller_services";

let getAllPosts = (Credendials) => {
  return Axios.get("/", Credendials);
};
let getOnePost = (Credendials) => {
  return Axios.get("/:id", Credendials);
};
let createPost = (Credendials) => {
  return Axios.post("/", Credendials);
};

// let modifyPost = (Credendial) => {
//   return Axios.put("auth/posts/:id", Credendial);
// };
// let deletePost = (Credendial) => {
//   return Axios.delete("auth/posts/:id", Credendial);
//};
export const postsServices = {
  getAllPosts,
  getOnePost,
  createPost,

  // modifyPost,
  // deletePost,
};
