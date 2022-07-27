<template>
  <div class="forum_head">
    <div class="img">
      <img
        id="logo"
        src="../../assets/icon-left-font-monochrome-black.svg"
        alt="logo Groupomania"
      />
    </div>
    <div class="header_btn">
      <button class="head_btn" @click="contact">Assistance</button>
      <button class="head_btn" @click="logout()">Déconnexion</button>
    </div>
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

.head_btn {
  font-size: 16px;
  font-weight: 200;
  letter-spacing: 1px;
  padding: 13px 20px 13px;
  outline: 0;
  border: 1px solid black;
  color: #fd2d01;
  font-weight: bold;
  cursor: pointer;
  position: relative;
  background-color: rgba(0, 0, 0, 0);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.head_btn:after {
  content: "";
  background-color: #f4f4f9;
  width: 100%;
  z-index: -1;
  position: absolute;
  height: 100%;
  top: 7px;
  left: 7px;
  transition: 0.2s;
}

.head_btn:hover:after {
  top: 0px;
  left: 0px;
}

@media (min-width: 768px) {
  .head_btn {
    padding: 13px 50px 13px;
  }
}
</style>
