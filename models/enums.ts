enum Enum_Rol {
    estudiante = 'Estudiante',
    lider = 'Lider',
    administrador = 'Administrador',
}

enum Enum_EstadoUsuario{
    pendiente = 'Pendiente',
    autorizado = 'Autorizado',
    administrador = 'No autorizado'
}

export {
    Enum_Rol, Enum_EstadoUsuario
}