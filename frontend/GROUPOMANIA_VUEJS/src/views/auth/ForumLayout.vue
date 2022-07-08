<template>
  <div class="forum">
    <ForumHeader />
    <div class="forum_contain">
      <div id="forum_side">
        <ForumNav />
      </div>
      <div id="forum_display">
        <Feed />
        <RouterView />
      </div>
    </div>
  </div>
</template>

<script>
import ForumHeader from "../../components/forum/ForumHeader.vue";
import ForumNav from "../../components/forum/ForumNav.vue";
import Feed from "./Feed.vue";

export default {
  name: "forum",
  components: { ForumHeader, ForumNav, Feed },
  mounted() {
    alert("monté sur page forum");
  },
};
</script>

<style>
.forum {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.forum_contain {
  display: flex;
  flex-direction: column;
}
.forum_display {
  width: 80%;
  padding: 10px;
  margin-left: 10px;
}
</style>
