<template>
  <nav class="navbar">
    <ul class="nav-list">
      <li class="nav-item"><router-link to="/">Accueil</router-link></li>
      <li class="nav-item"><router-link to="/about">À propos</router-link></li>
      <li class="nav-item"><router-link to="/projects">Projets</router-link></li>
      <li class="nav-item"><router-link to="/contact">Contacts</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100px;
  background-color: #6d071a;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 20px;
}

.nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
}

.nav-item {
  margin: 10px 0;
}

.nav-item a {
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
  display: block;
  padding: 10px;
  width: 100%;
}


</style>
