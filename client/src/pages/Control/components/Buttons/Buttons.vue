<script>

export default {
    name: 'Buttons',
    data() {
        return {
            presionado: null
        }
    },
    methods: {
        movement(direction) {
            let button = document.getElementById(direction)
            button.style.backgroundColor = 'rgb(80, 80, 80)'

            this.presionado = setInterval(() => {
            console.log(direction);
            }, 100);
        },
        stop(direction) {
            clearInterval(this.presionado)

            let button = document.getElementById(direction)
            button.style.backgroundColor = 'rgb(0, 0, 0)'
        }
    }
}

</script>

<template>

<section>
    <button id="a" @mousedown="movement('a')" @mouseup="stop('a')"><p>A</p></button>
    <button id="b" @mousedown="movement('b')" @mouseup="stop('b')"><p>B</p></button>
</section>

</template>

<style scoped>

section {
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: right;
    align-items: flex-end;
}

button {
    width: 5rem;
    height: 5rem;

    margin: 11rem 2rem;

    border: none;
    border-radius: 0.8rem;

    background-color: black;
}

p {
    font-size: 2rem;
    font-weight: bold;
}

#a, #b {
    color: white;
}

</style>