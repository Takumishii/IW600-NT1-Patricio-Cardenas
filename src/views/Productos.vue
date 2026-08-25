<script>
import CardProducto from '../components/CardProducto.vue'

export default {
  components: {
    CardProducto
  },
  data() {
    return {
      productos: [
        { id: 1, nombre: 'Miel de Eucalipto (pa el resfrio)', categoria: 'Conservas', productor: 'Unach', comuna: 'Chillan', precio: 700000 },
        { id: 2, nombre: 'Queso Mantecoso', categoria: 'Lácteos', productor: 'Via Lactea', comuna: 'Coihueco', precio: 8500 },
        { id: 3, nombre: 'Vino Pipeño "levanta muertos"', categoria: 'Vinos', productor: 'Viñedos para santa cena', comuna: 'Coelemu', precio: 10000 },
        { id: 4, nombre: 'Longaniza de Pollo Fit (muy mucho confiable)', categoria: 'Embutidos', productor: 'Porkeriza Don Cerdonio Porky', comuna: 'San Carlos', precio: 9000 },
        { id: 5, nombre: 'Mermelada de Rosa Mosqueta "Pa la mamita"', categoria: 'Conservas', productor: 'Diego', comuna: 'Coihueco', precio: 4500 },
        { id: 6, nombre: 'El Indio Pícaro', categoria: 'Artesanía', productor: 'Longaniza Informatica Unach', comuna: 'Chillan', precio: 1 }
        ]
    }
  }
}
</script>

<template>
  <div class="container">
    <h2>Catálogo de Productos - Región de Ñuble</h2>
    <p>Descubre lo que produjo nuestra región.</p>

    <div class="grid">
      <CardProducto 
        v-for="item in productos" 
        :key="item.id" 
        :producto="item" 
      />
    </div>
  </div>
</template>



<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}
</style>