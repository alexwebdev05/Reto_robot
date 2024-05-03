import { MongoClient } from 'mongodb';

// URL de conexión a tu base de datos en Atlas
const uri = 'mongodb+srv://web:Almi123@reto.y5tm43r.mongodb.net/?retryWrites=true&w=majority&appName=Reto\retos';

// Nombre de la base de datos y colección que deseas visualizar
const dbName = 'retos';
const collectionName = 'perros';

async function main() {
    // Conectarse al servidor de MongoDB
    const client = new MongoClient(uri);
    try {
        await client.connect();

        const database = client.db(dbName);
        const collection = database.collection(collectionName);

        // Consultar todos los documentos en la colección
        const documents = await collection.find({}).toArray();
        console.log(documents);
    } catch (error) {
       console.error('Error al conectar o consultar la base de datos:', error);
    } finally {
       // Cerrar la conexión con el cliente
       await client.close();
    }
}

// Llamar a la función main para iniciar la conexión y visualizar la colección
main();
