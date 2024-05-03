const mongoose = require("mongoose")
exports.Temperatura = mongoose.model('temperatura', { temperatura: Number, humedad: Number, fecha: {
    type: Date,
    default: Date.now
  }});
