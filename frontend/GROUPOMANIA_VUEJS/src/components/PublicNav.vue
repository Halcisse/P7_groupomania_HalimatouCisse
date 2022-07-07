<template>
  <header>
    <div class="wrapper">
      <!-- Les liens vers les pages   -->
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/signup">Signup</RouterLink>
        <RouterLink to="/login" @click="isLogged">Login</RouterLink>
        <RouterLink to="/admin/dashboard">Admin</RouterLink>
      </nav>
    </div>
    <div class="img">
      <img
        id="logo"
        src="../assets/icon-left-font.svg"
        alt="logo Groupomania"
      />
    </div>
  </header>
</template>

<script>
// import { accountServices } from '../_services';

export default {
  name: "PublicNav",

  data() {
    return {};
  },
  methods: {
    isLogged() {
      this.$router.push("/forum");
    },
  },
};
</script>
