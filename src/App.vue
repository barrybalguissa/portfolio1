<template>
  <div id="app">
    <NavBar />
    <main class="content">
      <router-view />
    </main>
  </div>
  <footer>
    <p>&copy; Mise a jour : 24/06/2024.</p>
  </footer>
</template>

<script>
import NavBar from './components/NavBar.vue';

export default {
  name: 'App',
  components: {
    NavBar,    
  }
}
</script>

<style scoped>
#app {
  display: flex;
  background-image: url('@/assets/background-image.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh;
  text-align: center;
  font-family: Arial, sans-serif;
}

.content {
  flex: 1;
  padding: 20px;
  color: white;
}

footer {
  background-size: cover;
  text-align: center;
  padding: 10px 0;
}
</style>
