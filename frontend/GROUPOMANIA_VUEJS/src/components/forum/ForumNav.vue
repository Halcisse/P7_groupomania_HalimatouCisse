<template>
  <div class="forum_nav">
    <div class="menu">
      <!-- faire lien vers page perso  -->
      <router-link to="{  }">Mon profil</router-link>
      <router-link to="/">Retour à l'Accueil</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "ForumNav",
};
</script>

<style>
.forum_nav {
  /* width: 20%; */
}
.menu {
  display: flex;
  flex-direction: column;
  border-right: solid 1px black;
  /* width: 50%; */

  background-color: #e0e1ed;
}
</style>
