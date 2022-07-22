<template>
  <div class="creation_post">
    <form @submit.prevent="createPost" method="post">
      <div class="form-group">
        <div class="title"></div>
        <textarea
          v-model="post.message"
          name="form-control"
          class="form-control"
          cols="120"
          placeholder="Quoi de neuf?"
        ></textarea>
        <div class="file_input" name="file_input">
          <input type="file" ref="imageUrl" @change="uploadImg" />
          <img :src="imageUrl" alt="" />
        </div>
        <div class="submit_btn" name="submit_btn">
          <button type="submit" name="submit">Publier</button>
        </div>
        <div v-for="post in posts" class="display_post">
          <div id="display">{{ post.message }} {{ post.imageUrl }}</div>
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
        imageUrl: null,
        userId: "",
      },
      posts: [],
    };
  },
  methods: {
    uploadImg(event) {
      console.log(event);
      this.post.imageUrl = URL.createObjectURL(event.target.files[0]);
    },

    createPost() {
      //s'il n'y a pas de message et pas de fichiers
      if (this.post.message == "" && this.post.imageUrl == null) {
        alert("La publication est vide!");
      }
      //s'il y a un message mais pas de fichiers OU un fichier mais pas de message OU fichier + message
      if (
        (this.post.message != "" && this.post.imageUrl == null) ||
        (this.post.imageUrl != null && this.post.message == "") ||
        (this.post.imageUrl != null && this.post.message != "")
      ) {
        //le post
        let post = {
          message: this.post.message,
          imageUrl: this.post.imageUrl,
          userId: sessionStorage.getItem("id"),
        };
        let token = sessionStorage.getItem("token");

        fetch("http://localhost:3000/api/posts", {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          method: "POST",
          body: JSON.stringify(post),
        })
          .then((res) => res.json())
          .then((data) => {
            this.$router.push("/forum");
            //Recuperer la liste de post de la bdd
            fetch("http://localhost:3000/api/posts", {
              headers: {
                Authorization: "Bearer " + token,
                "Content-Type": "application/json",
                Accept: "application/json",
              },
              method: "GET",
            })
              .then((response) => response.json())
              .then((blob) => {
                {
                  blob = this.posts;
                  this.posts.push(post);
                  console.log("thispost", this.posts);
                }
              })
              .catch((err) => console.log("impossible "));
          })
          .catch((err) => console.log("impossible de publier"));
      }
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

.display_post {
  background-color: red;
}
</style>
