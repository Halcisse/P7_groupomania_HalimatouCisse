<template>
  <div class="public">
    public nav
    <PublicNav />
    <!-- Les pages publiques -->
    <RouterView />
    <!-- Routes vers les pages publics -->
  </div>
</template>

<script>
import PublicNav from "@/components/PublicNav.vue";

export default {
  name: "home",
  components: {
    PublicNav,
  },
};
</script>

<style>
.public {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border: 1px solid blue;
}
</style>
