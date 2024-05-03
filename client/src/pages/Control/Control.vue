<script>

// Components
import components from './components/index'
const { Arrows, Buttons } = components

export default {
    data() {
        return {
            imageUrl: 'http://192.168.0.101:5500/last_image.jpg'
        }
    },
    name: 'Control',
    components: {
        Arrows: Arrows,
        Buttons: Buttons
    },
    methods: {
    reloadImage() { // CAMBIO: Define un método para recargar la imagen
      this.imageUrl = ''; // CAMBIO: Limpia la URL de la imagen
      this.$nextTick(() => { // CAMBIO: Espera a que Vue.js actualice el DOM
        this.imageUrl = 'http://192.168.0.101:5500/last_image.jpg'; // CAMBIO: Restablece la URL de la imagen
      });
    },
  },
}

</script>

<template>

<main id="container">

    <!-- Vuelta -->
    <a id="return" href="/">Home</a>

    <!-- Foto -->
    <button id="sacar" @click="reloadImage">foto</button>

    <section id="foto">
        <iframe :src="imageUrl" allow="camera; microphone; fullscreen; display-capture; autoplay; screen-wake-lock" id="camara"></iframe>
    </section>

    <!-- Pantalla -->
    <section id="screen">
        <iframe src="http://192.168.0.101:5500/index.html" allow="camera; microphone; fullscreen; display-capture; autoplay; screen-wake-lock" id="camara"></iframe>
    </section>

    <!-- Controles -->
    <section id="controls">

        <div id="arrows">
            <Arrows />
        </div>

        <div id="buttons">
            <Buttons />
        </div>

    </section>
</main>

</template>

<style scoped>

* {
    margin: 0;
    padding: 0;
}

html, main {
    margin: 0;
    padding: 0;
    max-width: 100vw;
    max-height: 100vh;
    overflow: hidden;
}

video {
    border-radius: 2rem;
}

a {
    all: unset;
}

iframe {
    border: none;
}

#foto {
    position: fixed;
}

#sacar {
    z-index: 99;
}

#camara {
        width: 5vw;  /* CAMBIO: Ajusta el ancho a tu gusto */
        height: 5vh; /* CAMBIO: Ajusta la altura a tu gusto */
    }

#camara {
    width: 100vw;
    height: 100vh;
}

#return {
    position: fixed;
    top: 2rem;

    padding: 0.5rem 1rem;

    border-radius: 0.5rem;
    color: white;
    background-color: black;

    cursor: pointer;
    z-index: 1;
}

#container {
    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: grey;
}

#screen {   
    height: 98%;

    display: flex;
    flex-direction: column;
}

#controls {
    width: 80%;
    height: 100%;

    position: absolute;
    display: flex;

    opacity: 0.8;
}

#arrows {
    height: 100%;
    width: 50%;

    display: flex;
    align-items: flex-end;
}

#buttons {
    height: 100%;
    width: 50%;

    display: flex;
    align-items: flex-end;
}

</style>