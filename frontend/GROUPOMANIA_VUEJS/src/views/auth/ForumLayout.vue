<template>
  <div class="forum">
    <ForumHeader />
    <div class="forum_contain">
      <div id="forum_side">
        <ForumNav />
      </div>
      <div id="forum_display">
        <div class="feed">
          <div class="feed_title">
            <h1>Actualités</h1>
          </div>
          <div class="feed_nav">
            <!-- <CreatePost /> -->
            <Suspense>
              <DisplayPost />
            </Suspense>
          </div>
        </div>
        <RouterView />
      </div>
    </div>
  </div>
</template>

<script>
import ForumHeader from "../../components/forum/ForumHeader.vue";
import ForumNav from "../../components/forum/ForumNav.vue";
import DisplayPost from "../../components/forum/feed/DisplayPost.vue";
import { Suspense } from "vue";

export default {
  name: "forum",
  components: { ForumHeader, ForumNav, DisplayPost, Suspense },
};
</script>

<style>
.forum {
  display: flex;
  flex-direction: column;
  width: 100%;
  /* background-color: aqua; */
}

.forum_contain {
  display: flex;
  /* gap: 10px; */
  /* 
  background-color: chartreuse; */
}
/* .forum_display {
  width: 80%;
  padding: 10px;
  margin-left: 10px;
   background-color: maroon;
} */
</style>
