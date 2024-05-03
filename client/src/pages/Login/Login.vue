<script>

import axios from 'axios';

export default {
  data() {
    return {
      usuario: {
        usuario: "",
        contraseña: "",
      },
      register: true
    }
  },
  methods: {
    enviarDatos() {
      axios.post('http://localhost:8000/api/users/login', JSON.stringify(this.usuario), {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then(response => {
        console.log(response)
        if (response.data.success) {
          localStorage.setItem('token', response.data.token)
          window.location.href = "/temperaturas"
        } else {
          console.error(response.data.msg)
        }
      })
      .catch(error => {
        if (error.response && error.response.status === 404) {
          this.register = false
        } else {
          console.log(error)
        }
      })
    }
  }
}

</script>

<template>

<main>
    <img src="/perro-robot.webp" alt="Foto de perro robot">

    <!-- Menu -->
    <section>
        <h2 v-if="!register">Usuario o contraseña incorrecto</h2>
        <form @submit.prevent="login">
            <label><h2>Usuario</h2><input v-model="usuario.usuario" type="text"></label>
            <label><h2>Contraseña</h2><input v-model="usuario.contraseña" type="text"></label>
            <button @click="enviarDatos">Iniciar sesión</button>
        </form>
        <div>
          <a href="/registro">Registrarse</a>
          <a href="/">Home</a>
        </div>
        
        
    </section>

</main>

</template>

<style scoped>

main {
  display: flex;
  justify-content: center;
  align-items: center;

    width: 100%;
    height: 100vh;
    overflow: hidden;
}

img {
    width: 100%;
    z-index: -1;

    position: fixed;
}

a {
  font-weight: 600;

  color: rgb(121, 255, 248);

  filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.5));

  margin-right: 2rem;
}

section {
  width: 25%;

  border-radius: 0.5rem;

  background: linear-gradient(90deg, rgba(40, 211, 191, 0.4), rgba(24, 173, 231, 0.4)) ;
  backdrop-filter: blur(10px);
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.5);

  padding: 3rem 3rem;
}

form, label, section {
  display: flex;
  flex-direction: column;
}

label {
  font-size: 1rem;
  font-weight: 600;
}

h2 {
  color: white;

  filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.6));
}

input {
  height: 1.5rem;

  border: none;
  border-radius: 0.25rem;

  margin-top: 0.25rem;
  margin-bottom: 1rem;
}

button {
  width: 35%;
  height: 2rem;

  color: rgb(121, 255, 248);
  font-weight: 600;

  border: 2px solid rgb(121, 255, 248);
  border-radius: 0.5rem;

  background-color: transparent;
  filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.6));

  margin-bottom: 2rem;
}

button:hover {
  background-color: rgba(255, 255, 255, 0.178);
}

</style>