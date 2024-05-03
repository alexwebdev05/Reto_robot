import TemperaturaModel from '../models/Temperatura.js'

class TemperaturaController {
    static getAllDoc = async (req, res) => {
        try {
            const result = await TemperaturaModel.find()
            res.send(result)
        }catch (error) {
            console.log(error)
        }
    }
}

export default TemperaturaController