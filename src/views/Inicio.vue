<template>
  <div class="inicio-container">
    <!-- Sección Banner Hero -->
    <section class="hero">
      <div class="hero-content">
        <h1>Bienvenido a Mercado Ñuble Digital</h1>
        <p>
          La plataforma que conecta de forma directa a los pequeños productores, 
          artesanos y emprendedores de la Región de Ñuble con la comunidad.
          SEEEEEEEEEEEEEEEEEEEEEEEEEEEE
        </p>
        <div class="hero-buttons">
          <router-link to="/productos" class="btn btn-primary">Ver Catálogo</router-link>
          <router-link to="/productores" class="btn btn-secondary">Conocer Productores</router-link>
        </div>
      </div>
    </section>

    <section class="caracteristicas">
      <div class="card-feature">
        <div class="icon">🧀</div>
        <h3>Productos Locales</h3>
        <p>Mieles, lácteos, vinos patrimoniales y embutidos elaborados con tradiciones únicas de Ñuble.</p>
      </div>

      <div class="card-feature">
        <div class="icon">📍</div>
        <h3>Diversas Comunas</h3>
        <p>Encuentra productos provenientes de Chillán, Coihueco, Coelemu, San Carlos y más.</p>
      </div>

      <div class="card-feature">
        <div class="icon">🤝</div>
        <h3>Trato Directo</h3>
        <p>Manifesta tu interés y ponte en contacto directo con los emprendedores de la región.</p>
      </div>
    </section>

    <section class="cta-section">
      <h2>¿Eres productor de la Región de Ñuble?</h2>
      <p>Ponte en contacto con la organización para integrar tus productos a la plataforma.</p>
      <router-link to="/contacto" class="btn btn-outline">Contáctanos Aquí</router-link>
    </section>
  </div>
</template>

<style scoped>
.inicio-container {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}

.hero {
  background: linear-gradient(135deg, #1b5e20 0%, #2e7d32 100%);
  color: white;
  padding: 3.5rem 2rem;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.hero-content h1 {
  color: #ffffff;
  font-size: 2.2rem;
  margin-bottom: 1rem;
}

.hero-content p {
  font-size: 1.1rem;
  max-width: 700px;
  margin: 0 auto 2rem auto;
  opacity: 0.95;
}

.hero-buttons {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.btn {
  padding: 0.8rem 1.6rem;
  border-radius: 6px;
  text-decoration: none;
  font-weight: bold;
  font-size: 1rem;
  display: inline-block;
}

.btn-primary {
  background-color: #ffffff;
  color: #1b5e20;
}

.btn-primary:hover {
  background-color: #f4f7f4;
  transform: translateY(-2px);
}

.btn-secondary {
  background-color: #81c784;
  color: #1b5e20;
}

.btn-secondary:hover {
  background-color: #66bb6a;
  transform: translateY(-2px);
}

.btn-outline {
  border: 2px solid #2e7d32;
  color: #2e7d32;
  background: transparent;
}

.btn-outline:hover {
  background-color: #2e7d32;
  color: white;
}

.caracteristicas {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.card-feature {
  background: white;
  padding: 2rem 1.5rem;
  border-radius: 8px;
  border: 1px solid #e0e0e0;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.03);
}

.icon {
  font-size: 2.5rem;
  margin-bottom: 0.8rem;
}

.card-feature h3 {
  color: #1b5e20;
  margin-bottom: 0.5rem;
}

.card-feature p {
  color: #666;
  font-size: 0.95rem;
}

.cta-section {
  background-color: #e8f5e9;
  border: 1px solid #c8e6c9;
  padding: 2.5rem 1.5rem;
  border-radius: 8px;
  text-align: center;
}

.cta-section h2 {
  color: #1b5e20;
  margin-bottom: 0.5rem;
}

.cta-section p {
  color: #2c3e50;
  margin-bottom: 1.2rem;
}
</style>