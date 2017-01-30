var React = require('react');

var WeatherMsg = ({temp, location}) => {
        return (
            <div>
                <h3>it's {temp} in {location}</h3>
            </div>
        )
};

module.exports = WeatherMsg;