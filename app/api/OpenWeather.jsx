var axios = require("axios").default;

const WEATHER_SITE_URL = "http://api.openweathermap.org/data/2.5/weather?appid=f8f0da15cb1e6e092f8c4524fcfb69f1&units=metric";

module.exports = {
    getTemp: function (location) {
        var encodedLocation = encodeURIComponent(location);
        var reqUrl = `${WEATHER_SITE_URL}&q=${encodedLocation}`;

        return axios
            .get(reqUrl)
            .then(function (res) {
                if (res.data.cod && res.data.message) {
                    throw new Error(res.response.message);
                } else {
                    return res.data.main.temp;
                }
            }, function (res) {
                throw new Error(res.response.data.message);
            })
    }

}