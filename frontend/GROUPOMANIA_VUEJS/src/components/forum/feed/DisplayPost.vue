<template>
  
</template>

<script>
import { postsServices } from "../../../_services";

export default {
  name: "displayPost",
  data() {
    return {
      post: {
        message: "",
        imageUrl: "",
      },
    };
  },
  method: {
    getAllPosts() {
      postsServices.getAllPosts();
    },
  },
};
</script>
