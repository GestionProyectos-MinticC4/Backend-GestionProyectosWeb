import conectarBD from "./db/db";
import { UserModel } from "./models/user";
import {Enum_Rol} from './enums';

const main = async () =>{
    await conectarBD();

    // Crear un usuario
    // await UserModel.create({
    //     correo:"dsl@gmail.com",
    //     identificacion: "1258545",
    //     nombre:"Daniel",
    //     Apellido:"Molano",
    //     rol:Enum_Rol.administrador
    // })
    // .then((u)=>{
    //     console.log('Usuario Creado', u);
    // })
    // .catch((e) => {
    //     console.log('Error creando el usuario', e);
    // });

    //Obtener los usuarios
    // await UserModel.find().then((u)=> {
    //     console.log('Usuarios, u');
    // })
    // .catch((e) => {
    //     console.log('Error obteniendo los usuarios',e);
    // });

    //Obtener un solo ususario
    // await UserModel.findOne({ identificacion: '1155588'})
    // .then((u) = > {
    //     console.log('Usuario encontrado', u);
    // })
    // .catch((e) = > {
    //     console.console.error(e);
    // });

    //Editar un Usuario
    // await UserModel.findOneAndUpdate({ correo: 'Laura@gmail.com'},
    // {
    //     nombre: 'Juan',
    //     apellido: 'Lopez',
    // }
    // )
    // .then((u) => {
    //     console.log('Usuario Actualizado', u);
    // })
    // .catch((e) = > {
    //     console.error('Error actualizando', e);
        
    // });

    //Eliminar un usuario
    await UserModel.findOneAndDelete({ correo: 'Laura@gmail.com'}).then( u =>{
        console.log('Usuario eliminado', u);
    }).catch.error((e) => {
        console.error(e);
    });
    ;
};
main();
