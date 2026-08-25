<script>
export default {
  name: 'CardProducto',
  props: {
    producto: {
      type: Object,
      required: true
    }
  },
  emits: ['interes'],
  methods: {
    interes() {
      this.$emit('interes', this.producto)
    }
  }
}
</script>

<template>
  <div class="card" :class="{ 'deshabilitado': !producto.disponible }">
    <div class="card-header">
      <h3>{{ producto.nombre }}</h3>
      <span class="badge">{{ producto.categoria }}</span>
    </div>
    
    <div class="card-body">
      <p><strong>Productor:</strong> {{ producto.productor }}</p>
      <p><strong>Comuna:</strong> {{ producto.comuna }}</p>
      <p class="precio">${{ producto.precio.toLocaleString('es-CL') }}</p>
      
      <p class="estado">
        Estado: 
        <span :class="producto.disponible ? 'disponible' : 'agotado'">
          {{ producto.disponible ? 'Disponible' : 'Agotado' }}
        </span>
      </p>
    </div>

    <div class="card-footer">
      <button 
        class="btn-interes" 
        :disabled="!producto.disponible"
        @click="interes"
      >
        {{ producto.disponible ? 'Me interesa' : 'Sin Stock' }}
      </button>
    </div>
  </div>
</template>



<style scoped>
.card {
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  background-color: #ffffff;
  padding: 1.2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.card.deshabilitado {
  opacity: 0.65;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.8rem;
}

.card-header h3 {
  margin: 0;
  font-size: 1.1rem;
  color: #2c3e50;
}

.badge {
  background: #e8f5e9;
  color: #2e7d32;
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  font-size: 0.85rem;
  font-weight: bold;
}

.precio {
  font-size: 1.25rem;
  font-weight: bold;
  color: #2e7d32;
  margin-top: 0.8rem;
}

.disponible {
  color: #2e7d32;
  font-weight: bold;
}

.agotado {
  color: #c62828;
  font-weight: bold;
}

.card-footer {
  margin-top: 1rem;
}

.btn-interes {
  width: 100%;
  padding: 0.6rem;
  background-color: #2e7d32;
  color: white;
  border: none;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s;
}

.btn-interes:hover:not(:disabled) {
  background-color: #1b5e20;
}

.btn-interes:disabled {
  background-color: #9e9e9e;
  cursor: not-allowed;
}
</style>