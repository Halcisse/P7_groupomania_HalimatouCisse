<template>
  <div>
    <div class="form__input">
      <label for="title">Modifier le titre</label>
      <input
        type="text"
        id="title"
        arial-label="modify_title_post"
        v-model="post.title"
      />
    </div>
    <div class="form__input">
      <label for="message">Modifier le message</label>
      <input
        type="text"
        id="message"
        aria-label="modify_message_post"
        v-model="post.message"
      />
    </div>
    <div class="form__input">
      <label for="image"></label>

      <input
        type="file"
        name="image"
        @change="onFileChange"
        id="image"
        aria-label="image_post"
      />
    </div>
    <div
      class="dialogue_btn"
      v-if="this.post.image !== null || this.image !== null"
      @click="deleteImage"
    >
      SUPPRIMER L'IMAGE
    </div>
    <div v-if="this.image == 'delete'">Image supprimée !</div>
    <div class="dialogue_btn" @click="noEtat()">
      <span>ANNULER</span>
    </div>
    <button class="btn-grad" @click="modifyPost()">
      <span>Publier la modification</span>
    </button>
  </div>
</template>

<script>
export default {
  name: "edit",
  props: ["id"],

  data: () => {
    return {
      post: {
        id: "",
        message: "",
        imageUrl: null,
      },
    };
  },
  mounted() {
    console.log(this.$route.params);
    this.post.id = this.$route.params.id;
  },

  methods: {
    onFileChange(e) {
      this.post.imageUrl = e.target.files[0];
    },

    // modifyPost() {
    //   let postUpdate = new FormData();
    //   postUpdate.append("message", this.post.message);
    //   postUpdate.append("UserId", this.post.id);
    //   postUpdate.append("image", this.post.imageUrl);

    //   let token = sessionStorage.getItem("token");
    //   fetch("http://localhost:3000/api/posts/:id", postUpdate, {
    //     headers: {
    //       Authorization: "Bearer " + token,
    //       "Content-Type": "multipart/form-data",
    //     },
    //     method: "PUT",
    //   })
    //     .then((res) => res.json())
    //     .then((data) => {
    //       console.log(data);
    //     })
    //     .catch((err) => console.log("err"));
    // },
  },
};
</script>

<style></style>
