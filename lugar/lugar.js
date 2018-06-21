const axios = require('axios');


const getLugarLatLng = async( direccion ) => {

	let urlencode = encodeURI( direccion );

	let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${urlencode}&key=AIzaSyALC-GhyIM9eJKalYxKX_4fF_SMgBsQvw8`);
	
	if( resp.data.status === 'ZERO_RESULTS' ){
		throw new Error( `No hay resultados para: ${ direccion }`);
	}

	let location = resp.data.results[0];
	let coors = location.geometry.location;

	return {
		direccion: location.formatted_address,
		lng: coors.lng,
		lat: coors.lat
	}
}


module.exports = {
	getLugarLatLng
}