<template>
  <div class="creation_post">
    <form @submit.prevent="createPost" id="newPost">
      <div class="form-group" name="form-control">
        <textarea
          name="form-control"
          class="form-control"
          cols="30"
          rows="10"
          placeholder="Quoi de neuf?"
        ></textarea>
        <div class="file_input" name="file_input">
          <label for="imageUrl">Ajouter une image?</label> <br />
          <input type="file" id="imageUrl" name="imageUrl" />
        </div>
        <div class="submit_btn" name="submit_btn">
          <button type="submit" name="submit">Publier</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { postsServices } from "../../../_services";

export default {
  name: "createPost",
  data() {
    return {
      post: {
        message: "",
        imageUrl: "",
        userId: "",
      },
    };
  },
  method: {
    // onFileChange(event) {
    //   let file = event.target.files[0];
    //   this.post.imageUrl = file;
    // },
    createPost() {
      //   postsServices
      //     .createPost(this.post)
      //     .then((res) => {
      //       console.log(res.data);
      //       console.log(res.user);
      //       sessionStorage.setItem("post", JSON.stringify(this.post)),
      //         this.$router.push("/");
      //     })
      //     .catch((err) => console.log(err));

      console.log(this.post);
      fetch("http://localhost:3000/api/posts", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        method: "POST",
        body: JSON.stringify(this.post),
      })
        .then((res) => res.json())
        .then(
          (data) => console.log(data),
          sessionStorage.setItem("post", JSON.stringify(this.post)),
          this.$router.push("/")
        )
        .catch((err) => console.log("impossible de publier"));
    },
  },
};
</script>

<style>
.form-control {
  border: none;
  border-radius: 5px;
  box-shadow: 2px 20px 8px 7px #e3e4f1;
  padding: 5px;
  margin-bottom: 22px;
  width: 100%;
  height: 100px;
}
</style>
