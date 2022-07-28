<template>
  <div v-for="post in posts.slice().reverse()" class="display">
    {{ post.message }} {{ post.imageUrl }}
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "displayPost",
  async setup() {
    const posts = ref(null);
    let token = sessionStorage.getItem("token");
    const response = await fetch("http://localhost:3000/api/posts", {
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    posts.value = await response.json();

    return { posts };
  },
};
</script>
<style>
.display {
  background-color: #f4f4f9;
  margin: 15px 10px;
  border-style: inset;
  border-radius: 11px;
  height: 100px;
}
</style>
