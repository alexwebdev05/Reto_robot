// conexion con mongo
import mongoose from 'mongoose';
mongoose.set('strictQuery', false);

const connect = async (URL) => {
    try {
        const options = {
            dbName: 'retos',
        }
        await mongoose.connect(URL, options);
        console.log('Conectado con mongito');
    } catch (err) {
        console.log(err);
    }
}

export default connect