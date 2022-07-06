<template>
  <div>User Index works</div>
</template>

<script>
import { userServices } from "../../../_services";
export default {
  name: "UserIndex",
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    getUser() {
      fetch("http://localhost:3000/api/auth/user", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(this.user),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data), console.log(data.token);
          localStorage.setItem("token", data.token);
          this.$router.push("admin/dashboard"); // forum
        })
        .catch((err) => console.log(err));
    },
  },
};

// mounted() {
//   userServices
//     .getAllUsers()
//     .then()
//     .cath((err) => console.log(err));
// },
</script>
