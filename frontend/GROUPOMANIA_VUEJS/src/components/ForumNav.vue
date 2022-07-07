<template>
  <div class="forum_nav">
    <!-- forum nav -->
    <!-- <router-link to="dashboard">Dashboard</router-link> -->
    <!-- <router-link to="user/index">Accès aux utilisateurs</router-link> -->
    FORUM NAV
    <router-link to="posts/index">Mon profil</router-link>
    <router-link to="/">Retour à l'Accueil</router-link>
  </div>
</template>

<script>
import { accountServices } from "../_services";

export default {
  name: "ForumNav",
};
</script>

<style>
.forum_nav {
  display: flex;
  flex-direction: column;
  border-right: solid 1px black;
}
</style>
