<template>
  <div class="feed">
    <div class="feed_title">
      <h1>Actualités</h1>
    </div>
    <div class="creation_post">
      <form @submit.prevent="createPost" id="post">
        <div class="form-group">
          <input type="text" id="post_user_id" v-model="post.id" hidden />
          <textarea
            name="form-control"
            class="form-control"
            cols="30"
            rows="10"
            placeholder="Quoi de neuf?"
            v-model="post.message"
          ></textarea>
          <input
            type="file"
            id="file_input"
            v-on:change="post.imageUrl"
            accept="images/*"
          />
          <div class="submit_btn">
            <button type="submit">Publier</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { postsServices } from "../../_services/posts_services";
import { accountServices } from "../../_services";
export default {
  name: "feed",
  data() {
    return {
      post: {
        message: "",
        imageUrl: "",
        id: "",
      },
    };
  },
  methods: {
    createPost() {
      console.log(this.post);
      // fetch("http://localhost:3000/api/posts", {
      //   // headers: {
      //   //   "Content-Type": "application/json",
      //   //   Accept: "application/json",
      //   // },
      //   method: "POST",
      //   body: this.post,
      // })
      //   .then((res) => res.json())
      //   .then(
      //     (data) => console.log(data),
      //     sessionStorage.setItem("post", JSON.stringify(this.post)),
      //     this.$router.push("/")
      //   )
      //   .catch((err) => console.log("impossible de publier"));

      // console.log(this.post);
      // postsServices.createPost(this.post);

      //   .then((res) => {
      //     console.log(res);
      //     sessionStorage.setItem("post", res.data.post);

      //     this.$router.push("/forum");
      //     console.log("post crée");
      //     console.log(res);
      //   })
      //   .catch((err) => console.log(err));
    },
  },
};
</script>

<style>
.feed {
  margin-left: 5px;
  width: 100%;
  /* background-color: #fd2d01; */
}
h1 {
  margin-bottom: 30px;
  color: #fd2d01;
}
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
