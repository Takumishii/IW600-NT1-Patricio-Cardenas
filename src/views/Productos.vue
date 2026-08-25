<script>
import CardProducto from '../components/CardProducto.vue'

export default {
  components: {
    CardProducto
  },
  data() {
    return {
      disponibles: false,
      seleccionado: null,
      productos: [
        { id: 1, nombre: 'Miel de Eucalipto (pa el resfrio)', categoria: 'Conservas', productor: 'Unach', comuna: 'Chillan', precio: 700000, disponible: true },
        { id: 2, nombre: 'Queso Mantecoso', categoria: 'Lácteos', productor: 'Via Lactea', comuna: 'Coihueco', precio: 8500, disponible: true },
        { id: 3, nombre: 'Vino Pipeño "levanta muertos"', categoria: 'Vinos', productor: 'Viñedos para santa cena', comuna: 'Coelemu', precio: 10000, disponible: false },
        { id: 4, nombre: 'Longaniza de Pollo Fit (muy mucho confiable)', categoria: 'Embutidos', productor: 'Porkeriza Don Cerdonio Porky', comuna: 'San Carlos', precio: 9000, disponible: true },
        { id: 5, nombre: 'Mermelada de Rosa Mosqueta "Pa la mamita"', categoria: 'Conservas', productor: 'Diego', comuna: 'Coihueco', precio: 4500, disponible: true },
        { id: 6, nombre: 'El Indio Pícaro', categoria: 'Artesanía', productor: 'Longaniza Informatica Unach', comuna: 'Chillan', precio: 1, disponible: false }
      ]
    }
  },
  computed: {
    filtrados() {
      if (this.disponibles) {
        return this.productos.filter(p => p.disponible)
      }
      return this.productos
    }
  },
  methods: {
    registrarInteres(producto) {
      this.seleccionado = producto
    }
  }
}
</script>

<template>
  <div class="container">
    <h2>Catálogo de Productos - Región de Ñuble</h2>
    <p>Descubre lo que produjo nuestra región.</p>

    <div v-if="seleccionado" class="alerta-interes">
      <p>
        ¡Gracias por tu interés en <strong>{{ seleccionado.nombre }}</strong>! 
        El productor te contactará en cuanto dejes tus datos en la pestaña "Contacto" <strong>{{ seleccionado.productor }}</strong> ({{ seleccionado.comuna }}).
      </p>
      <button @click="seleccionado = null" class="btn-cerrar">&times;</button>
    </div>

    <div class="controles">
      <label class="checkbox-label">
        <input type="checkbox" v-model="disponibles" />
        Mostrar solo productos disponibles
      </label>
    </div>

    <div v-if="filtrados.length > 0" class="grid">
      <CardProducto 
        v-for="item in filtrados" 
        :key="item.id" 
        :producto="item" 
        @interes="registrarInteres"
      />
    </div>

    <div v-else class="mensaje-vacio">
      <p>No hay productos disponibles actualmente bajo el criterio seleccionado.</p>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
}

.alerta-interes {
  background-color: #e8f5e9;
  border: 1px solid #a5d6a7;
  color: #1b5e20;
  padding: 1rem 1.5rem;
  border-radius: 6px;
  margin-bottom: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.alerta-interes p {
  margin: 0;
}

.btn-cerrar {
  background: none;
  border: none;
  font-size: 1.2rem;
  color: #1b5e20;
  cursor: pointer;
  font-weight: bold;
}

.controles {
  margin-bottom: 1.5rem;
  background: #ffffff;
  padding: 1rem;
  border-radius: 6px;
  border: 1px solid #e0e0e0;
}

.checkbox-label {
  font-weight: bold;
  color: #2c3e50;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.grid {
  display: grid !important;
  grid-template-columns: repeat(3, 1fr) !important; /* Fuerza 3 columnas */
  gap: 1.5rem !important;
  margin-top: 1.5rem;
  width: 100%;
}

@media (max-width: 900px) {
  .grid {
    grid-template-columns: repeat(2, 1fr) !important; /* 2 columnas en tablets */
  }
}

@media (max-width: 600px) {
  .grid {
    grid-template-columns: 1fr !important; /* 1 columna en celulares */
  }
}

.mensaje-vacio {
  text-align: center;
  padding: 2rem;
  background-color: #fff3e0;
  border-radius: 6px;
  color: #e65100;
  border: 1px solid #ffe0b2;
  font-weight: bold;
}
</style>