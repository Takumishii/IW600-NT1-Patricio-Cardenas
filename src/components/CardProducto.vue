<script>
export default {
  name: 'ProductoCard',
  props: {
    producto: {
      type: Object,
      required: true
    }
  }
}
</script>

<template>
  <div class="card">
    <div class="card-header">
      <h3>{{ producto.nombre }}</h3>
      <span class="badge">{{ producto.categoria }}</span>
    </div>
    
    <div class="card-body">
      <p><strong>Productor:</strong> {{ producto.productor }}</p>
      <p><strong>Comuna:</strong> {{ producto.comuna }}</p>
      <p class="precio">${{ producto.precio.toLocaleString('es-CL') }}</p>
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

.card-body p {
  margin: 0.4rem 0;
  color: #555;
}

.precio {
  font-size: 1.25rem;
  font-weight: bold;
  color: #2e7d32 !important;
  margin-top: 0.8rem !important;
}
</style>