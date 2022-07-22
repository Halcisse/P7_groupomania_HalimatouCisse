<template>
  <div class="creation_post">
    <form @submit.prevent="createPost" method="post">
      <div class="form-group">
        <div class="title"></div>
        <textarea
          v-model="post.message"
          name="form-control"
          class="form-control"
          cols="30"
          rows="10"
          placeholder="Quoi de neuf?"
        ></textarea>
        <div class="file_input" name="file_input">
          <input type="file" ref="imageUrl" @change="uploadImg" />
          <img :src="imageUrl" alt="" />
        </div>
        <div class="submit_btn" name="submit_btn">
          <button type="submit" name="submit">Publier</button>
        </div>
        <div v-for="(value, key) in post" class="display_post">
          {{ key }}: {{ value }}
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "createPost",
  data() {
    return {
      post: {
        message: "",
        imageUrl: null,
        userId: "",
      },
    };
  },
  methods: {
    uploadImg(event) {
      console.log(event);
      this.post.imageUrl = URL.createObjectURL(event.target.files[0]);
    },

    createPost() {
      let message = this.post.message;
      let imageUrl = this.post.imageUrl;
      let userId = sessionStorage.getItem("id");

      let post = {
        message,
        imageUrl,
        userId,
      };
      console.log(post);
      console.log(userId);

      //s'il n'y a pas de message et pas de fichiers
      if (message == "" && imageUrl == null) {
        alert("La publication est vide!");
      }

      let token = sessionStorage.getItem("token");
      //s'il y a un message mais pas de fichiers OU un fichier mais pas de message OU fichier + message
      if (
        (this.post.message != "" && this.post.imageUrl == null) ||
        (this.post.imageUrl != null && this.post.message == "") ||
        (this.post.imageUrl != null && this.post.message != "")
      ) {
        fetch("http://localhost:3000/api/posts", {
          headers: {
            Authorization: "Bearer  " + token,
            "Content-Type": "application/json",
            Accept: "application/json",
          },

          method: "POST",
          body: JSON.stringify(post),
        })
          .then((res) => res.json())
          .then(
            (data) => console.log(data),
            sessionStorage.setItem("post", JSON.stringify(post)),
            console.log("okmsg"),
            this.$router.push("/forum")
          )
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
</style>
