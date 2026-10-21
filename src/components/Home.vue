<template>
  <div class="home">
    <h1 class="title">BIENVENUE SUR MON PORTFOLIO</h1>
  </div>
</template>

<script>
export default {
  name: "HomeSection"
};
</script>

<style scoped>
.home {
  box-sizing: border-box;
  width: 100%;
  min-height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;
  font-family: Arial, sans-serif;
  text-align: center;
}

.title {
  box-sizing: border-box;
  max-width: 100%;
  margin: 0;
  color: yellow;
  font-size: clamp(1.8rem, 4vw, 3rem);
  line-height: 1.2;
  overflow-wrap: anywhere;
  text-shadow: 0 2px 6px rgba(0, 0, 0, 0.7);
}
</style>