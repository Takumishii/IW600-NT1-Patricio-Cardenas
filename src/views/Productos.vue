<script>
import CardProducto from '../components/CardProducto.vue'

export default {
  components: {
    CardProducto
  },
  data() {
    return {
      disponibles: false,
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
  }
}
</script>

<template>
  <div class="container">
    <h2>Catálogo de Productos - Región de Ñuble</h2>
    <p>Descubre lo que produjo nuestra región.</p>

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
      />
    </div>

    <div v-else class="mensaje-vacio">
      <p>No hay productos disponibles actualmente bajo el criterio seleccionado.</p>
    </div>
  </div>
</template>

<style scoped>
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
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
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