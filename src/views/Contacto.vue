<script>
export default {
  data() {
    return {
      form: {
        nombre: '',
        correo: '',
        telefono: '',
        comuna: '',
        mensaje: ''
      },
      error: '',
      enviado: false
    }
  },
  methods: {
    procesarFormulario() {
      if (
        !this.form.nombre.trim() || 
        !this.form.correo.trim() || 
        !this.form.telefono.trim() || 
        !this.form.comuna || 
        !this.form.mensaje.trim()
      ) {
        this.error = 'Por favor, complete todos los campos obligatorios (*) antes de enviar.'
        return
      }

      this.error = ''
      this.enviado = true
    },
    nuevoMensaje() {
      this.form = {
        nombre: '',
        correo: '',
        telefono: '',
        comuna: '',
        mensaje: ''
      }
      this.enviado = false
    }
  }
}
</script>

<template>
  <div class="container">
    <div class="form-card">
      <h2>Contacto Mercado Ñuble Digital</h2>
      <p class="subtitulo">Completa el formulario</p>

      <form v-if="!enviado" @submit.prevent="procesarFormulario" class="formulario" novalidate>
        <div class="form-group">
          <label for="nombre">Nombre Completo (*):</label>
          <input 
            type="text" 
            id="nombre" 
            v-model="form.nombre" 
            placeholder="Ej. Juan Pérez" 
          />
        </div>

        <div class="form-group">
          <label for="correo">Correo Electrónico (*):</label>
          <input 
            type="email" 
            id="correo" 
            v-model="form.correo" 
            placeholder="ejemplo@correo.cl" 
          />
        </div>

        <div class="form-group">
          <label for="telefono">Teléfono (*):</label>
          <input 
            type="tel" 
            id="telefono" 
            v-model="form.telefono" 
            placeholder="+56 9 1234 5678" 
          />
        </div>

        <div class="form-group">
          <label for="comuna">Comuna (*):</label>
          <select id="comuna" v-model="form.comuna">
            <option value="">Seleccione una comuna</option>
            <option value="Chillán">Chillán</option>
            <option value="San Carlos">San Carlos</option>
            <option value="Coihueco">Coihueco</option>
            <option value="Coelemu">Coelemu</option>
            <option value="Quirihue">Quirihue</option>
          </select>
        </div>

        <div class="form-group">
          <label for="mensaje">Mensaje (*):</label>
          <textarea 
            id="mensaje" 
            v-model="form.mensaje" 
            rows="4" 
            placeholder="Escribe tu mensaje o consulta..."
          ></textarea>
        </div>

        <div v-if="error" class="mensaje-error">
          {{ error }}
        </div>

        <button type="submit" class="btn-enviar">Enviar Mensaje</button>
      </form>

      <div v-else class="resumen-confirmacion">
        <h3>¡Mensaje Enviado con Éxito!</h3>
        <p>A continuación se presenta el resumen de la información ingresada:</p>
        
        <div class="datos-resumen">
          <p><strong>Nombre:</strong> {{ form.nombre }}</p>
          <p><strong>Correo:</strong> {{ form.correo }}</p>
          <p><strong>Teléfono:</strong> {{ form.telefono }}</p>
          <p><strong>Comuna:</strong> {{ form.comuna }}</p>
          <p><strong>Mensaje:</strong> {{ form.mensaje }}</p>
        </div>

        <button @click="nuevoMensaje" class="btn-nuevo">Enviar otro mensaje</button>
      </div>
    </div>
  </div>
</template>



<style scoped>
.container {
  display: flex;
  justify-content: center;
  padding: 2rem 1rem;
}

.form-card {
  background: #ffffff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
  width: 100%;
  max-width: 550px;
}

h2 {
  color: #1b5e20;
  margin-bottom: 0.3rem;
}

.subtitulo {
  color: #666;
  margin-bottom: 1.5rem;
  font-size: 0.95rem;
}

.formulario {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

label {
  font-weight: bold;
  color: #2c3e50;
  font-size: 0.9rem;
}

input, select, textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 0.95rem;
  box-sizing: border-box;
}

input:focus, select:focus, textarea:focus {
  outline: none;
  border-color: #2e7d32;
  box-shadow: 0 0 0 3px rgba(46, 125, 50, 0.15);
}

.mensaje-error {
  background-color: #ffebee;
  color: #c62828;
  padding: 0.8rem;
  border: 1px solid #ef9a9a;
  border-radius: 6px;
  font-size: 0.9rem;
  font-weight: bold;
}

.btn-enviar {
  background-color: #2e7d32;
  color: white;
  border: none;
  padding: 0.85rem;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.btn-enviar:hover {
  background-color: #1b5e20;
}

.resumen-confirmacion {
  background-color: #e8f5e9;
  border: 1px solid #a5d6a7;
  padding: 1.5rem;
  border-radius: 8px;
  color: #1b5e20;
}

.resumen-confirmacion h3 {
  margin-top: 0;
}

.datos-resumen {
  background-color: #ffffff;
  padding: 1rem;
  border-radius: 6px;
  margin: 1rem 0;
  border: 1px solid #c8e6c9;
  color: #2c3e50;
}

.datos-resumen p {
  margin: 0.5rem 0;
}

.btn-nuevo {
  background-color: #1565c0;
  color: white;
  border: none;
  padding: 0.6rem 1.2rem;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
}

.btn-nuevo:hover {
  background-color: #0d47a1;
}
</style>