<template>
  <div class="edit_card">
    <div class="title">
      <h1>Modifier la publication</h1>
    </div>
    <p>Ancien post</p>
    <div class="post">{{ post.message }} {{ post.imageUrl }}</div>

    <p>Nouveau post</p>
    <form @submit.prevent="updateOne" method="post">
      <div class="form-group">
        <textarea
          v-model="post.message"
          name="post"
          class="post"
          cols="120"
          placeholder="Quoi de neuf?"
        ></textarea>
        <div class="post_info">
          <div class="file_item">
            <label for="file" class="label_file">
              <p>Ajouter une image?</p>
              <input type="file" @change="uploadImg" accept="image/*" />
              <img :src="post.imageUrl" />
            </label>
          </div>
          <div class="btn">
            <button @click="updateOne">MODIFIER LE POST</button>
            <router-link to="/forum">ANNULER</router-link>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "edit",
  data: () => {
    return {
      post: {
        message: "",
        imageUrl: null,
      },
    };
  },
  mounted() {
    // pour afficher le poste a supprimer;
    let postId = this.$route.params.id;
    let token = sessionStorage.getItem("token");
    console.log(postId);

    fetch(`http://localhost:3000/api/posts/${postId}`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.post = data;
      })
      .catch((err) => console.log("err"));
  },

  methods: {
    uploadImg(e) {
      this.post.imageUrl = e.target.files[0];
    },

    updateOne() {
      let postUpdate = new FormData();
      postUpdate.append("message", this.post.message);
      postUpdate.append("image", this.post.imageUrl);
      let postId = this.$route.params.id;
      
      let token = sessionStorage.getItem("token");
      fetch(`http://localhost:3000/api/posts/${postId}`, postUpdate, {
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "multipart/form-data",
        },
        method: "PUT",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        })
        .catch((err) => console.log("err"));
    },
  },
};
</script>

<style scoped>
.edit_card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.title {
  margin-bottom: 15px;
}

.btn {
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 100%;
}
.post {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f4f4f9;
  margin: 15px 10px;
  border-style: inset;
  border-radius: 11px;
  height: 100px;
  width: 450px;
}
.post_info {
  display: flex;
  flex-direction: column;
}
</style>
