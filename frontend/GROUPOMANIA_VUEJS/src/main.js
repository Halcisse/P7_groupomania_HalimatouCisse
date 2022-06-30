import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(router);

app.mount("#app");

new Vue({
  el: "#app",
  data() {
    return {
      info: null,
    };
  },
  mounted() {
    axios
      .get("http://localhost:3000/api/auth/signin")
      .then((response) => (this.info = response));
  },
});
