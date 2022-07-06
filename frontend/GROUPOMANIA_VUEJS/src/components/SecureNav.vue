<template>
  <div class="secure_nav">
    secure nav
    <!-- <router-link to="dashboard">Dashboard</router-link>
    <router-link to="user/index">Accès aux utilisateurs</router-link>
    <router-link to="posts/index">Accès aux posts</router-link>
    <router-link to="/">Retour à l'Accueil</router-link> -->
  </div>
</template>

<script>
export default {
  name: "SecureNav",
};
</script>

<style>
.secure_nav {
  display: flex;
  flex-direction: column;
  border-right: solid 1px black;
  padding-right: 34px;
}
</style>
