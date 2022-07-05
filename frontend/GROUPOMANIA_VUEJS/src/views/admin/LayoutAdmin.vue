<template>
  <div class="admin">
    <AdminHeader />
    <div class="ad_contain">
      <div id="ad_side">
        <AdminNav />
      </div>
      <div id="ad_display">
        <RouterView />
      </div>
    </div>

    <!-- Routes vers les pages publics -->
  </div>
</template>

<script>
import AdminHeader from "../../components/AdminHeader.vue";
import AdminNav from "../../components/AdminNav.vue";

export default {
  name: "AdminLayout",
  components: { AdminHeader, AdminNav },
};
</script>

<style>
/* .admin {
  /* display: flex;
  flex-direction: column;
  justify-content: center; */

.ad_contain {
  display: flex;
  align-items: center;
}
.ad_display {
  width: 100%;
  padding: 10px;
  margin-left: 10px;
}
</style>
