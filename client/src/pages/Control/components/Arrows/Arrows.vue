<script>
import axios from 'axios'

export default {
    name: 'Arrows',
    data() {
        return {
            presionado: null,
            direccion: {
                up: false,
                down: false,
                left: false,
                right: false
            }
        }
    },
    methods: {
        // Esto somplemente hace unos console log que hice para ver si funcionaba bien
        movement(direction) {
            let button = document.getElementById(direction)
            button.style.backgroundColor = 'rgb(80, 80, 80)'

            if ( direction == "up" ) {
                this.presionado = setInterval(() => {
                    console.log(direction);
                    console.log(this.direccion.up)
                }, 100);
                this.direccion.up = true
            } else if ( direction == "down" ) {
                this.presionado = setInterval(() => {
                    console.log(direction);
                    console.log(this.direccion.down)
                }, 100);
                this.direccion.down = true
            } else if ( direction == "left" ) {
                this.presionado = setInterval(() => {
                    console.log(direction);
                    console.log(this.direccion.left)
                }, 100);
                this.direccion.left = true
            } else if ( direction == "right" ) {
                this.presionado = setInterval(() => {
                    console.log(direction);
                    console.log(this.direccion.right)
                }, 100);
                this.direccion.right = true
            }

            
        },
        stop(direction) {
            // Llama al método para parar el script
            fetch('http://localhost:5000/parar')
                .then(response => response.json())
                .then(data => {
                console.log(data);
                // Maneja la respuesta del servidor aquí
                })
                .catch(error => console.error('Error:', error));
        },
        ejecutarScript() {
        // Llama al método para ejecutar el script
        fetch('http://localhost:5000/alante')
            .then(response => response.json())
            .then(data => {
            console.log(data);
            // Maneja la respuesta del servidor aquí
            })
            .catch(error => console.error('Error:', error));
        }
    }
}

</script>

<template>

<section>
        <div class="button-containers-center">
            <button id="up" class="button-center" @mousedown="ejecutarScript" @mouseup="stop">

            </button>
        </div>
        <div class="button-containers-around">
            <button id="left" class="button-around" @mousedown="movement('left')" @mouseup="stop('left')">

            </button>
            <div id="center"></div>
            <button id="right" class="button-around" @mousedown="movement('right')" @mouseup="stop('right')">

            </button>
        </div>
        <div class="button-containers-center">
            <button id="down" class="button-center" @mousedown="movement('down')" @mouseup="stop('down')">

            </button>
        </div>

</section>

</template>

<style scoped>

section {
    width: 20rem;
    height: 20rem;

    margin-bottom: 3rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.button-containers-center {
    width: 100%;
    height: 30%;

    display: flex;
    justify-content: center;

}

.button-containers-around {
    width: 100%;
    height: 20%;


    display: flex;
    justify-content: center;

}

.button-center {
    width: 20%;
}

.button-around {
    width: 30%;
}

.button-center, .button-around {

    border: none;
    border-radius: 0.8rem;
    background-color: black;
}

#center {
    width: 20%;
    height: 35%;
}

</style>