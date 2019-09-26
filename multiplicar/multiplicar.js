const fs = require('fs');

const colors = require('colors');

let listarTabla = (base, limite = 10) => {

    for(let i = 1; i <= limite; i++){
        console.log(`${base} * ${i} = ${base*i}`.blue);
    }

}

let crearArchivo = async (base, limite = 10) => {

    if(!Number(base)){
        throw new Error(`${base} no es un número`);
    }

    let data = '';

    for(let i = 1; i <= limite; i++){
        data += `${base} * ${i} = ${base * i}\n`;
    }

    fs.writeFile(`tablas/tabla-base${base}-limite${limite}.txt`, data, (err) => {
        if (err)
            throw new Error('Se ha producido un error', err);
    });

    return `tabla-base${base}-limite${limite}.txt`;

};

module.exports = {
    crearArchivo,
    listarTabla
};
