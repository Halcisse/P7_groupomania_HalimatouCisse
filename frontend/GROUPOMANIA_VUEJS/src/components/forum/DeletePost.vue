<template>
  <div class="delete_card">
    <div class="title">
      <h1>Êtes-vous sûr?</h1>
      <p>Toute suppression est définitive!</p>
    </div>
    <div class="post">{{ post.message }} <img :src="post.imageUrl" /></div>
    <div class="btn">
      <button @click="deleteOne">SUPPRIMER LE POST</button>
      <router-link to="/forum">ANNULER</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "delete",
  data() {
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
    deleteOne() {
      let postId = this.$route.params.id;
      let token = sessionStorage.getItem("token");
      console.log(postId);
      fetch(`http://localhost:3000/api/posts/${postId}`, {
        method: "DELETE",
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json; charset=UTF-8",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          // this.post = data.post;
          alert("publication supprimée!");
          this.$router.push("/forum");
        })
        .catch((err) => console.log("err"));
    },
  },
};
</script>

<style scoped>
.delete_card {
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
  width: 500px;
  height: 100%;
}

.post {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f4f4f9;
  margin: 15px 10px 44px 10px;
  border-style: inset;
  border-radius: 11px;
  height: 100px;
  width: 450px;
}
</style>
