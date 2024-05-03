<script setup>
import { onMounted, ref } from "vue";

// funcion para goger las temperaturas
import useTemperatura from "../../api/temperaturasApi"

// Esto se utiliza en el html para mostrar las temperaturas. Las temperaturas estan dentro de temperaturaData
const { temperaturaData, error, getAllTemperatura } = useTemperatura();
onMounted(getAllTemperatura);

const formatFecha = (fecha) => fecha.substring(0, 10);

function clear_token() {
    localStorage.clear();
}

const token = localStorage.getItem('token');
const tokenData = ref(null);

if (token) {
  // Decodificar el token para obtener los datos
  const decodedToken = JSON.parse(atob(token.split('.')[1]));
  // Asignar los datos del token a la referencia
  tokenData.value = decodedToken;
} else {
  console.log('No se ha encontrado ningún token en el almacenamiento local.');
}
</script>

<template>

<body>

    <!-- Temperaturas -->
    <section id="temperaturas-container">
        <h2 class="title" id="title"><a id="return" href="/">Home</a>Temperaturas</h2><a id="unlogin" @click="clear_token" href="/login">Cerrar sessión en {{ tokenData.usuario }}</a>
        
        <div>
        <section id="numbers">
            <div>
                <div id="info">
                    <p>Temperatura</p>
                    <p>Humedad</p>
                    <p>Fecha</p>
                </div>
                <div id="temperaturas-content">
                    <div v-if="error">Error Temperatura</div> 
                    <div v-for="item in temperaturaData.slice().reverse()" :key="item.id">
                        <div class="aligner">
                            <div class="grados">{{ item.temperatura }} °C</div>
                            <div class="humedad">{{ item.humedad }}%</div>
                            <div class="fecha">{{ formatFecha(item.fecha) }}</div>
                        </div>
                    </div>
                </div>
            </div>

            <iframe src="https://charts.mongodb.com/charts-reto-iytpc/public/dashboards/66165d5a-d210-48d8-8f00-166018c8ac5c" frameborder="0" width="700" height="290"></iframe>
        </section>  
    </div>
        
        

    </section>

    



</body>

</template>

<style scoped type="scss">

body {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    background: linear-gradient(45deg, var(--color-background1), var(--color-background2));
}

a {
    all: unset;
}

iframe {
    border-radius: 0.5rem;
    margin: 0 0.5rem;
}

#return {
    position: absolute;
    top: 0.8rem;
    left: 2.5vw;

    border-radius: 0.5rem;
    background-color: rgb(221, 240, 255);

    cursor: pointer;
    z-index: 1;

    font-size: medium;
    font-weight: 500;

    padding: 0.5rem;
}

#numbers {
    display: flex;
}

#unlogin {
    position: absolute;
    top: 0.8rem;
    right: 2.5vw;

    border-radius: 0.5rem;
    background-color: rgb(221, 240, 255);

    cursor: pointer;
    z-index: 1;

    font-size: medium;
    font-weight: 500;

    padding: 0.5rem;
}

#temperaturas-container {
    width: 100%;
    height: 100vh;

    display: flex;
    flex-direction: column;

    margin: 0.5rem;

    text-align: center;
}

.title {
    width: 100%;

    border-radius: 0.5rem;

    background-color: white;

    padding: 0.5rem 0;

    resize: horizontal;

    margin-bottom: 0.5rem;
}

#info {
    width:35vw;

    display: flex;

    border-radius: 0.5rem 0.5rem 0 0;

    background-color: rgb(221, 240, 255);

    padding: 0.5rem 1rem;
}


#info p {
    width: 33.33%;

    text-align: center;
}

#temperaturas-content {
    width: 35vw;
    height: 15rem;

    border-radius: 0 0 0.5rem 0.5rem;

    background-color: white;

    padding: 0.5rem 1rem;
    margin-bottom: 0.5rem;

    overflow: scroll;
}

.aligner {
    width: 100%;
    height: 1rem;

    display: flex;
    justify-content: center;

    border-bottom: 2px solid rgb(221, 221, 221);

    padding: 0.5rem 0;
}

.temperatura {
    padding: 0.5rem 0;
}

.grados, .humedad, .fecha {
    width: 33.33%;

}

</style>