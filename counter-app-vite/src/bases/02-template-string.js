const nombre   = 'Fernando';
const apellido = 'Herrera';

// const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = `${ nombre } ${ apellido }`;
console.log( nombreCompleto );

export const getSaludo = (nombre) =>  {
    return 'Hola ' + nombre;
};

//console.log( `Este es un texto: ${ getSaludo( nombre ) }  ` );