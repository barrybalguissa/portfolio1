<template>
  <div class="home">
    <h1 class="title">BIENVENU SUR MON PORTFOLIO</h1>
  </div>
</template>

<script>
import ProjectScript from "./ProjectScript.vue";

export default {
  name: "HomeSection",
  ProjectScript,
};
</script>

<style scoped>
.home {
  font-family: Arial, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 1.5rem;
}

.title {
  color: yellow;
  position: absolute;
  right: 400px;
  top: 0;
}
</style>
