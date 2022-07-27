<template>
  <div class="forum">
    <ForumHeader />
    <div class="forum_contain">
      <div id="forum_side">
        <ForumNav />
      </div>
      <div id="forum_display">
        <div class="forum_display_title">
          <h1>Actualités</h1>
        </div>
        <div class="forum_display_nav">
          <!-- <CreatePost /> -->
          <Suspense>
            <DisplayPost />
          </Suspense>
        </div>
        <RouterView />
      </div>
    </div>
  </div>
</template>

<script>
import ForumHeader from "../../components/forum/ForumHeader.vue";
import ForumNav from "../../components/forum/ForumNav.vue";
import DisplayPost from "../../components/forum/DisplayPost.vue";
import { Suspense } from "vue";

export default {
  name: "forum",
  components: { ForumHeader, ForumNav, DisplayPost, Suspense },
};
</script>

<style>
#forum_display {
  width: 95%;
  margin: 10px 10px;
}
.forum {
  display: flex;
  flex-direction: column;
  width: 100%;
  /* background-color: yellow; */
}

.forum_contain {
  display: flex;

  /* background-color: chartreuse; */
}
.forum_display_title {
  margin-left: 10px;
}
</style>
