<template>
  <nav class="navbar">
    <div class="logo">Mercado Ñuble Digital</div>
    <ul class="nav-links">
      <li><router-link to="/">Inicio</router-link></li>
      <li><router-link to="/productos">Productos</router-link></li>
      <li><router-link to="/productores">Productores</router-link></li>
      <li><router-link to="/contacto">Contacto</router-link></li>
    </ul>
  </nav>
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #12544F;
  padding: 1rem 2rem;
  color: white;
}
.logo {
  font-weight: bold;
  font-size: 1.2rem;
}
.nav-links {
  list-style: none;
  display: flex;
  gap: 1.5rem;
  margin: 0;
  padding: 0;
}
.nav-links a {
  color: white;
  text-decoration: none;
  font-weight: 500;
}
.nav-links a.router-link-active {
  border-bottom: 2px solid #ffffff;
}
</style>