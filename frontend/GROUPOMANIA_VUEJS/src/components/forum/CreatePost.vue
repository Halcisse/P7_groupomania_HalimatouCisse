<template>

  <div class="creation_post">
    <form @submit.prevent="createPost" method="post">
      <div class="form-group">
        <textarea
          v-model="post.message"
          name="form-control"
          class="form-control"
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
          <div class="submit">
            <button class="submit_btn" type="submit" name="submit">
              Publier
            </button>
          </div>
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

        // userId: sessionStorage.getItem("id"),
      },

      posts: [],
    };
  },

  methods: {
    uploadImg(event) {
      this.post.imageUrl = event.target.files[0];
      // let filename = event.target.files[0].name;
      let fileSelected = this.post.imageUrl;
      let token = sessionStorage.getItem("token");
      fetch("http://localhost:3000/api/posts", {
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        method: "POST",
        body: JSON.stringify(fileSelected),
      })
        .then((res) => res.json())
        .then((data) => {
          alert("upload ok");
          console.log(data);
          fileSelected = data.imageUrl;
          // filename = this.post.imageUrl.name;
          console.log(fileSelected);
        })
        .catch((err) => console.log("err"));
    },

    createPost() {
      //s'il n'y a pas de message et pas de fichiers
      if (this.post.message == "" && this.post.imageUrl == null) {
        alert("La publication est vide!");
      }
      //s'il y a des fichiers et/ou message
      if (
        (this.post.message != "" && this.post.imageUrl == null) ||
        (this.post.imageUrl != null && this.post.message == "") ||
        (this.post.imageUrl != null && this.post.message != "")
      ) {
        //le post
        let post = {
          message: this.post.message,
          imageUrl: this.post.imageUrl,
          // userId: this.post.userId,
        };
        console.log(post);
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
        // axios.post("http://localhost:3000/api/posts", formData, {
        //   headers: {
        //     "Content-Type": "multipart/form-data",
        //   },
        // });
      }
    },
  },
};
</script>

<style>
/* .imagePreviewWrapper {
  background-repeat: no-repeat;
    width: 250px;
    height: 250px;
    display: block;
    cursor: pointer;
    margin: 0 auto 30px;
    background-size: contain;
    background-position: center center; */

.form-control {
  box-shadow: rgba(0, 0, 0, 0.4) 0px 30px 90px;
  border: none;
  border-radius: 20px;
  padding: 5px;
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
.submit_btn {
  align-items: center;
  appearance: none;
  background-color: #4e5166;
  border-radius: 24px;
  border-style: none;
  box-shadow: rgba(0, 0, 0, 0.2) 0 3px 5px -1px,
    rgba(0, 0, 0, 0.14) 0 6px 10px 0, rgba(0, 0, 0, 0.12) 0 1px 18px 0;
  box-sizing: border-box;
  color: #fd2d01;
  cursor: pointer;
  display: inline-flex;
  fill: currentcolor;
  font-family: "Google Sans", Roboto, Arial, sans-serif;
  font-size: 14px;
  font-weight: 500;
  height: 38px;
  justify-content: center;
  letter-spacing: 0.25px;
  line-height: normal;
  max-width: 100%;
  overflow: visible;
  padding: 2px 24px;
  position: relative;
  text-align: center;
}
/* input {
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
} */

/* input,
label {
  font-size: 1.25em;
  font-weight: 700;
  color: white;
  display: inline-block;
} */
.post_info {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
