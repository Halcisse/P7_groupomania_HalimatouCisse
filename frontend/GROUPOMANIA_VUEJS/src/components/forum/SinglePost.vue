<template>
  <div>{{ post.message }} {{ post.imageUrl }}</div>
</template>

<script>
export default {
  name: "SinglePost",
  props: {
    post: Object,
  },
};
</script>
