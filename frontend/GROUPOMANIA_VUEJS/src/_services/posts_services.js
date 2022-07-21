import Axios from "./caller_services";

let getAllPosts = () => {
  return Axios.get("/");
};
let getOnePost = (Credendials) => {
  return Axios.get("/:id", Credendials);
};
let createPost = (post) => {
  return Axios.post("/", post);
};
let uploadImg = (file) => {
  return Axios.post("/", file);
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
  uploadImg,
  // modifyPost,
  // deletePost,
};
