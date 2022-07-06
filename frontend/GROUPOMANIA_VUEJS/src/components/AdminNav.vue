<template>
  <div class="ad_nav">
    <router-link to="dashboard">Dashboard</router-link>
    <router-link to="user/index">Accès aux utilisateurs</router-link>
    <router-link to="posts/index">Accès aux posts</router-link>
    <router-link to="/">Retour à l'Accueil</router-link>
  </div>
</template>

<script>
export default {
  name: "AdminNav",
};
</script>

<style>
.ad_nav {
  display: flex;
  flex-direction: column;
  border-right: solid 1px black;
  padding-right: 34px;
}
</style>
