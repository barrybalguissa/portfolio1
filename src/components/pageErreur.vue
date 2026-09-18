<template>
  <div class="not-found">
    <h1>404</h1>
    <p>La Page est introuvable</p>
  </div>
</template>

<script>
export default {
  name: "NotFoundPage",
};
</script>

<style scoped>
.not-found {
  background-image: url("@/assets/page-erreur.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin: 0;
  height: 100vh;
  color: white;
  text-align: center;
}
.not-found img {
  max-width: 100%;
  height: auto;
}
</style>
