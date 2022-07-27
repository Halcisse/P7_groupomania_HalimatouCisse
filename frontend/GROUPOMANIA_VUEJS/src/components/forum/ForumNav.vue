<template>
  <div class="forum_nav">
    <div class="menu">
      <!-- faire lien vers page perso  -->
      <router-link to="{  }">Mon profil</router-link>
      <router-link to="/">Accueil</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "ForumNav",
};
</script>

<style scoped>
.forum_nav {
  background-color: #f4f4f9;
  height: 100%;
  padding: 0 2px;
  border-right: 0;
  border-right: solid 1px black;
}
a {
  text-decoration: none;
  font-style: none;
  color: #fd2d01;
  font-weight: bold;
  font-style: normal;
}
.menu {
  display: flex;
  flex-direction: column;

  padding: 0 12px;
}
</style>
