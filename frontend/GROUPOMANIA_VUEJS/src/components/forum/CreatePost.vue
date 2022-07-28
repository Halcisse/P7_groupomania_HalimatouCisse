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
        <div class="file_item">
          <label for="file" class="label_file">
            <p>Ajouter une image?</p>
            <input type="file" ref="file" @change="uploadImg" />
            <img :src="imageUrl" alt=""
          /></label>
        </div>
        <div class="submit_btn" name="submit_btn">
          <button type="submit" name="submit">Publier</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { accountServices } from "../../_services";

export default {
  name: "createPost",
  data() {
    return {
      post: {
        message: "",
        imageUrl: null,
        userId: sessionStorage.getItem("id"),
      },
      posts: [],
    };
  },

  methods: {
    uploadImg(event) {
      console.log(event);
      this.post.imageUrl = URL.createObjectURL(event.target.files[0]);
      // this.post.imageUrl = this.event; //event.target.files[0]
      console.log(this.post.imageUrl);
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
          userId: this.post.userId,
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
            alert("its ok");
            this.posts.push(this.post);
            window.location.reload();
          })
          .catch((err) => console.log("err"));
      }
    },
  },
};
</script>

<style>
.form-control {
  box-shadow: rgba(0, 0, 0, 0.4) 0px 30px 90px;
  border: none;
  border-radius: 20px;
  padding: 5px;
  margin-bottom: 22px;
  width: 100%;
  height: 100px;
}
.creation_post {
  border-radius: 20px;
}

.label_file {
  cursor: pointer;
  color: #fd2d01;
  font-weight: bold;
}
.label_file:hover {
  color: #f87373;
}

/* .input_file {
  display: none;
} */
</style>
