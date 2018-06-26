const axios = require('axios');


const getClima = async (lat,lng) => {

    let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=4a99ba9a7b241b23259c762411bb7e09`);
    
    if ( resp.cod === 400 ) {
        throw new Error(`No hay resultados para: ${lat} y ${lng}`);
    }

    let main = resp.data.main;

    return {
        temp: main.temp,
        temp_min: main.temp_min,
        temp_max: main.temp_max
    }
}


module.exports = {
    getClima
}