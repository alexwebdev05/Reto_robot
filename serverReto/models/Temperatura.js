import mongoose from 'mongoose'

const temperaturaSchema = new mongoose.Schema({
    fecha:{type: Date, require:true, trim:true},
    temperature:{type: Number, require:true, trim:true},
    humedad:{type: Number, require:true, trim:true},
})

const TemperaturaModel = mongoose.model("temperatura", temperaturaSchema)

export default TemperaturaModel