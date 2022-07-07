<template>
  <div class="forum">
    <ForumHeader />
    <div class="forum_contain">
      <div id="forum_side">
        <ForumNav />
      </div>
      <div id="forum_display">
        <RouterView />
      </div>
    </div>

    <!-- Routes vers les pages publics -->
  </div>
</template>

<script>
import ForumHeader from "../../components/ForumHeader.vue";
import ForumNav from "../../components/ForumNav.vue";

export default {
  name: "forum",
  components: { ForumHeader, ForumNav },
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
  /* width: 100%; */
  padding: 10px;
  margin-left: 10px;
}
</style>
