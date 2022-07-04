<template>
  <div class="public">
    <PublicNav />
    <!-- Les pages publiques -->
    Public Layout
    <RouterView />
    <!-- Routes vers les pages publics -->
  </div>
</template>

<script>
import PublicNav from "@/components/PublicNav.vue";

export default {
  name: "PublicLayout",
  components: {
    PublicNav,
  },
};
</script>

<style>
.public {
  border: 1px solid red;
}
</style>
