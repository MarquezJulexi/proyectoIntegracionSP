import mongoose from "mongoose";


const dbConnection = async ()=>{
    try {
        await mongoose.connect( process.env.MONGODB_CONNECTION || "");
        console.log(`Base de datos conectada...`);
        
    } catch (error) {
        console.log(`No se pudo conectar a base de datos ${process.env.MONGODB_CONNECTION}`);
        throw new Error(`ERror al conectarse a la base de datos`);
    }

}

export{
    dbConnection
}