<template>
  <div v-for="post in posts" class="display">
    {{ post.message }} {{ post.imageUrl }}
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "displayPost",
  async setup() {
    alert("setup");
    const posts = ref(null);
    let token = sessionStorage.getItem("token");
    const response = await fetch("http://localhost:3000/api/posts", {
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      // method: "GET",
    });
    posts.value = await response.json();

    return { posts };
  },
};
</script>
<style>
.display {
  background-color: rgb(253, 233, 196);
  margin: 15px 10px;
  border: solid 3px;
  border-radius: 11px;
  height: 100px;
}
</style>
