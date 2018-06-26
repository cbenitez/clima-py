const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const argv = require('./config/yargs').argv; 

//lugar.getLugarLatLng( argv.direccion )
//    .then(resp => console.log(resp) )
//    .catch(e => console.log(e)) ;

//clima.getClima(-25.2637399, -57.57592599999999)
//        .then( temp => console.log(temp) )
//        .catch(e=>console.log(e));

let getInfo = async( direccion ) => {

	try{
		let coors = await lugar.getLugarLatLng( direccion );
		let temp = await clima.getClima( coors.lat, coors.lng );
	
		return `El clima en ${ coors.direccion } es de ${ temp.temp } grados`;
	}catch( e ){
		return `No se pudo determinar el clima en ${ direccion }`;
	}

}

getInfo( argv.direccion )
	.then( mensaje => console.log( mensaje ) )
	.catch( e => console.log( e ) );