<template>
  <header>
    <div class="wrapper">
      <!-- Les liens vers les pages   -->
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/signup">Signup</RouterLink>
        <RouterLink to="/login">Login</RouterLink>
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
export default {
  name: "PublicNav",
};
</script>
