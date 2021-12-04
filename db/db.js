import { connect } from "mongoose";

const conectarBD = async ()=>{
    return await connect(
        'mongodb+srv://Admin:AdminProj3cts@cluster0.tr4km.mongodb.net/GestionProyectos?retryWrites=true&w=majority'
        )
        .then(()=> {
            console.log("Conexion exitosa");
        })
        .catch((e)=>{
            console.error("Error conectando a la BD", e);
        });
    };


export default conectarBD;