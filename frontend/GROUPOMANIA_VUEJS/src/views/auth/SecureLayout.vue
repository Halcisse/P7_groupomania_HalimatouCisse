<template>
  <div class="secure">
    <SecureHeader />
    <div class="secure_contain">
      <div id="secure_side">
        <SecureNav />
      </div>
      <div id="secure_display">
        <RouterView />
      </div>
    </div>

    <!-- Routes vers les pages privés -->
  </div>
</template>

<script>
import SecureHeader from "../../components/SecureHeader.vue";
import SecureNav from "../../components/AdminNav.vue";

export default {
  name: "SecureLayout",
  data() {
    return {};
  },
  components: { SecureHeader, SecureNav },
  methods:{

  }
};
</script>

<style>
.secure {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
}

.secure_contain {
  display: flex;
  align-items: center;
}
.secure_display {
  width: 100%;
  padding: 10px;
  margin-left: 10px;
}
</style>
