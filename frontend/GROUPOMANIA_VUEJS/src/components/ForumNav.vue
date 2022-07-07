<template>
  <div class="forum_nav">
    <div class="menu">
       <!-- faire lien vers page perso  -->
      <router-link to="{  }">Mon profil</router-link>
      <router-link to="/">Retour à l'Accueil</router-link>
    </div>
    <div class="feed"></div>

    FEED
  </div>
</template>

<script>
export default {
  name: "ForumNav",
};
</script>

<style>
.forum_nav {
  display: flex;
}
.menu {
  display: flex;
  flex-direction: column;
  border-right: solid 1px black;
  width: 20%;
}

.feed {
  margin-left: 10px;
  background-color: aqua;
}
</style>
