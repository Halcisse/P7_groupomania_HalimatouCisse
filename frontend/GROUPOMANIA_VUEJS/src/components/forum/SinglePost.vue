<template>
  <div>{{ post.message }} {{ post }}</div>
</template>

<script>
export default {
  name: "SinglePost",
  props: {
    post: Object,
  },
};
</script>
