<template>
  <div class="forum_head">
    <div class="img">
      <img
        id="logo"
        src="../../assets/icon-left-font-monochrome-black.svg"
        alt="logo Groupomania"
      />
    </div>
    <h1>Forum header</h1>

    <button @click="logout()">Déconnexion</button>
  </div>
</template>

<script>
// import { logout } from "../../../../backend/controllers/user";
import { accountServices } from "@/_services";

export default {
  name: "ForumHeader",
  methods: {
    logout() {
      accountServices.logout();
      this.$router.push("/");
    },
  },
};
</script>

<style>
.forum_head {
  display: flex;
  justify-content: space-between;
  padding-bottom: 10px;
  border-bottom: solid 1px black;
}
button {
  text-decoration: none;
}
</style>
