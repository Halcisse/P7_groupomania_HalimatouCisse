<template>
  <div class="feed">
    <!-- <div v-if="mode === 'create'" class="newPost">
      <label for="text" />
      <input
        type="text"
        name="post"
        value="post"
        id="post"
        placeholder="Avez vous quelque chose à partager?"
      />
      <button class="ajout image">add img</button>
      <button class="update post">update post</button>
      <button class="delete post">delete post</button>
    </div> -->
    <h1>Actualités</h1>
    <label for="text">
      <input
        type="text"
        name="post"
        value="post"
        id="post"
        placeholder="Avez vous quelque chose à partager?"
      />
    </label>
  </div>
</template>

<script>
export default {
  name: "feed",
};
</script>

<style>
.feed {
  margin-left: 20%;
  /* background-color: #fd2d01; */
}
h1 {
  margin-bottom: 30px;
  color: #fd2d01;
}
input {
  border: none;
  border-radius: 5px;
  box-shadow: 2px 20px 8px 7px #e3e4f1;
  padding: 5px;
  margin-bottom: 22px;
  width: 100%;
  height: 100px;
}
</style>
