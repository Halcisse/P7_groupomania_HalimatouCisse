<template>
  <div>
    {{ post.message }}
    <img :src="post.imageUrl" />
  </div>
</template>

<script>
export default {
  name: "SinglePost",
  props: {
    post: Object,
  },
};
</script>
