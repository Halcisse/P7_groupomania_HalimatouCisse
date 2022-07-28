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
          <CreatePost />
          <div v-if="error">{{ error }}</div>
          <Suspense>
            <template #default>
              <DisplayPost />
            </template>
            <template #fallback>
              <div>Publications en cours de chargement...</div>
            </template>
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
import CreatePost from "../../components/forum/CreatePost.vue";
import { Suspense, ref, onErrorCaptured } from "vue";

export default {
  name: "forum",
  setup() {
    const error = ref(null);

    onErrorCaptured((e) => {
      error.value = e;
    });

    return { error };
  },
  components: { ForumHeader, ForumNav, DisplayPost, Suspense, CreatePost },
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
