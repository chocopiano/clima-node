const axios = require('axios');

const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=5cfb049c2fdfdfa9a38cd0496a148faf`)
    return resp.data.main.temp;
}

module.exports = {
    getClima
}