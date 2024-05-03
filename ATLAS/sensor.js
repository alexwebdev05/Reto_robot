const express = require('express')
const app = express()
const port = 8000
const mongoose = require("mongoose")
const { Temperatura } = require('./model')

const conenctDB = async()=>{
    await mongoose.connect('mongodb+srv://Admin:Almi123@reto.y5tm43r.mongodb.net/retos')

    console.log(`la base de datos esta conectada con ${mongoose.connection.host}`)
}

let temperature
let humidity

conenctDB()

var sensor = require("node-dht-sensor");

function readSensor() {
    sensor.read(11, 4, async function(err, temp, hum) {
        if (!err) {
            temperature = temp;
            humidity = hum;
            console.log(`temp: ${temperature}C, humidity: ${humidity}%`);

            const temperatura = new Temperatura({
                temperatura: temperature,
                humedad: humidity,
                fecha: Date.now()
            })

            const data = await temperatura.save()
            console.log('Data saved:', data)
        }
    });
}

setInterval(readSensor, 60000);

app.listen(port, () => {
    console.log(`escuchando ${port}`)
})
