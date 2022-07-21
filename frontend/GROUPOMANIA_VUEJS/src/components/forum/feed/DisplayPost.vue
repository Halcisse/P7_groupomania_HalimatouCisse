<template>
  <form @submit.prevent="displayPost" id="displayPost">displayPost</form>
</template>

<script>
import { postsServices } from "../../../_services";

export default {
  name: "displayPost",
  data(){
    return {

    }
  },
  method: {
    getAllPosts(){
      postsServices.getAllPosts()
      
    }
    
  },
};
</script>
