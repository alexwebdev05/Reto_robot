<script>

export default {
  name: 'Home'
}

</script>

<template>
  
  <section id="container">

    <!-- Xml -->
    <button id="xml"><a href="/xml" class="shadow-1">Convertidor de xml a json</a></button>

    <!-- Control -->
    <a href="/control" id="control">
      <video id="coche" autoplay loop muted>
        <source src="../../assets/media/coche.mp4" type="video/mp4">
      </video>
      <p class="title-1 shadow-1">Controlar el perro</p>
    </a>
    <!-- Temperaturas -->
    <a href="/temperaturas" id="temperaturas">
      <p class="title-1 shadow-1">Visualizar las temperaturas</p>
    </a>

  </section>

</template>

<style scoped>

a {
  all: unset;
}

p {
  color: white;
}

button {
  left: 2rem;
  bottom: 2rem;

  position: fixed;

  padding: 1rem 2rem;

  border: none;
  border-radius: 1rem;

  font-size: 1rem;
  font-weight: 600;

  color: white;
  background: linear-gradient(90deg, rgba(40, 211, 191, 0.8), rgba(24, 173, 231, 0.8));

  z-index: 4;
}

#container {
  display: flex;
  justify-content: center;

  width: 100vw;
  height: 100vh;

  overflow: hidden;
}

#control, #temperaturas, #xml {
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
}

#control:hover, #temperaturas:hover, #xml:hover {
  animation: OptionHover 300ms ease forwards;
  z-index: 3;
}

#control {
  background-color: rgb(0, 0, 0);
  width: 100%;
}

#coche {
  position: absolute;
  width: 100%; height: 100%;
  object-fit: cover;
  opacity: 0.2;
}

#temperaturas {
  background: linear-gradient(90deg, rgb(33, 175, 159), rgb(20, 141, 189));
  width: 100%;
  z-index: 2;
}

@keyframes OptionHover {
  0% {
      transform: scale(1);
    }
  100% {
      transform: scale(1.1);
    }
}

</style>
