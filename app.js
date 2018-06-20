const axios = require('axios');
const argv = require('./config/yargs').argv; 

let urlencode = decodeURIComponent( argv.direccion );

console.log( urlencode + "\n" );

axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${ urlencode }&key=AIzaSyALC-GhyIM9eJKalYxKX_4fF_SMgBsQvw8`)
    .then( resp => {
        let data = resp.data.results[0];
        console.log( 'address', data.formatted_address );
        console.log( 'lat', data.geometry.location.lat );
        console.log( 'lng', data.geometry.location.lng );
        /*
        console.log( JSON.stringify( resp.data, undefined, 2 ) );
        */
    })
    .catch( e => console.log( 'Error!' , e ) );