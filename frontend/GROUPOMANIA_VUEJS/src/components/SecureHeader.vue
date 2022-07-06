<template>
  <div class="secure_head">
    <h1>Header Secure (inserer ds forum)</h1>
    <button @click="logout()">Déconnexion</button>
  </div>
</template>

<script>
// import { logout } from "../../../../backend/controllers/user";
import { accountServices } from "@/_services";

export default {
  name: "SecureHeader",
  methods: {
    logout() {
      accountServices.logout();
      this.$router.push("/");
    },
  },
};
</script>

<style>
.secure_head {
  display: flex;
  justify-content: space-between;
  padding-bottom: 10px;
  border-bottom: solid 1px black;
}
button {
  text-decoration: none;
}
</style>
