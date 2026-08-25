<template>
  <div id="app">
    <Navbar />
    <main class="container">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

export default {
  components: {
    Navbar,
    Footer
  }
}
</script>

<style>
body {
  margin: 0;
  font-family: Arial, sans-serif;
  background-color: #f4f4f9;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.container {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  flex: 1;
}
</style>