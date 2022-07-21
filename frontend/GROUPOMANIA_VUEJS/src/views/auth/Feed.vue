<template>
  <div class="feed">
    <div class="feed_title">
      <h1>Actualités</h1>
    </div>
    <div class="feed_nav">
      <CreatePost />
      <DisplayPost />
    </div>
  </div>
</template>

<script>
import CreatePost from "../../components/forum/feed/CreatePost.vue";
import DisplayPost from "../../components/forum/feed/DisplayPost.vue";

export default {
  name: "feed",
  components: { CreatePost, DisplayPost },
};
</script>

<style>
.feed {
  margin-left: 5px;
  width: 100%;
  /* background-color: #fd2d01; */
}
h1 {
  margin-bottom: 30px;
  color: #fd2d01;
}
</style>
