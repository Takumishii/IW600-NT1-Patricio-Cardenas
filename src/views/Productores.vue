<script>
export default {
  data() {
    return {
      productores: [
        { 
          id: 1, 
          nombre: 'Unach', 
          comuna: 'Chillán', 
          rubro: 'Conservas y Apicultura', 
          descripcion: 'Especialistas en la elaboración de miel de eucalipto para combatir los resfríos de la zona.' 
        },
        { 
          id: 2, 
          nombre: 'Vía Láctea', 
          comuna: 'Coihueco', 
          rubro: 'Lácteos Artesanales', 
          descripcion: 'Productores de queso mantecoso tradicional proveniente del sector rural de Coihueco.' 
        },
        { 
          id: 3, 
          nombre: 'Viñedos para santa cena', 
          comuna: 'Coelemu', 
          rubro: 'Vinos Tradicionales', 
          descripcion: 'Elaboradores del auténtico vino pipeño "levanta muertos" del Valle del Itata.' 
        },
        { 
          id: 4, 
          nombre: 'Porkeriza Don Cerdonio Porky', 
          comuna: 'San Carlos', 
          rubro: 'Embutidos', 
          descripcion: 'Creadores de la famosa y confiable longaniza de pollo fit de la zona de San Carlos.' 
        },
        { 
          id: 5, 
          nombre: 'Diego', 
          comuna: 'Coihueco', 
          rubro: 'Conservas Caseras', 
          descripcion: 'Elaboración artesanal de mermelada de rosa mosqueta con recetas tradicionales.' 
        },
        { 
          id: 6, 
          nombre: 'Longaniza Informática Unach', 
          comuna: 'Chillán', 
          rubro: 'Artesanía y Tecnología', 
          descripcion: 'Creadores del tradicional Indio Pícaro en versión tecnológica directamente desde Chillán.' 
        }
      ]
    }
  }
}
</script>

<template>
  <div class="container">
    <h2>Nuestros Productores</h2>
    <p class="subtitulo">Conoce a los productores locales detrás del catálogo de Mercado Ñuble Digital.</p>

    <div class="grid">
      <div v-for="productor in productores" :key="productor.id" class="card-productor">
        <h3>{{ productor.nombre }}</h3>
        <p class="comuna"><strong>Comuna:</strong> {{ productor.comuna }}</p>
        <p class="rubro"><strong>Rubro:</strong> {{ productor.rubro }}</p>
        <p class="descripcion">{{ productor.descripcion }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.subtitulo {
  color: #555;
  margin-bottom: 1.5rem;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}

.card-productor {
  background: #ffffff;
  padding: 1.5rem;
  border-radius: 8px;
  border: 1px solid #e0e0e0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.04);
  display: flex;
  flex-direction: column;
}

.card-productor h3 {
  margin-top: 0;
  color: #2e7d32;
  font-size: 1.15rem;
}

.comuna, .rubro {
  margin: 0.2rem 0;
  font-size: 0.95rem;
  color: #2c3e50;
}

.descripcion {
  margin-top: 0.8rem;
  font-size: 0.9rem;
  color: #666;
  line-height: 1.4;
}
</style>