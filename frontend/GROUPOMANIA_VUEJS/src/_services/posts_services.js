import Axios from "./caller_services";

let getAllPosts = (Credendial) => {
  return Axios.get("/", Credendial);
};
let getOnePost = (Credendial) => {
  return Axios.get("/:id", Credendial);
};
let createPost = (post) => {
  return Axios.post("/", post);
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
