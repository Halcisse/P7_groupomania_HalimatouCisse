<template>
  <div class="post">
    <div class="postMessage">{{ post.message }}</div>
    <div class="postImage">{{ post.imageUrl }}</div>

    <div class="postItem">
      <div class="iconLikes">
        <icon icon="thumbs-up" /> <icon icon="thumbs-down" />
      </div>
      <div class="iconeUpdate">
        <router-link to="posts/edit"><icon icon="trash-can" /></router-link>
        <router-link to="/edit"><icon icon="eraser" /></router-link>
      </div>
    </div>
  </div>
</template>

<script>
import EditPost from "./EditPost.vue";
export default {
  name: "SinglePost",
  props: {
    post: Object,
  },
  components: { EditPost },
};
</script>

<style scoped>
.post {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  /* background-color: red; */
}
.postMessage {
  /* background-color: blue; */
  height: 100%;
}
.postItem {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
img {
  /* background-color: green; */
  width: 100%;
  height: 100%;
  margin: 0;
}
</style>
