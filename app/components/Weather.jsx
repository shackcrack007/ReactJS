var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMsg = require('WeatherMsg');
var OpenWeather = require('OpenWeather');
var ErrorModal = require('ErrorModal');

var Weather = React.createClass({
    getInitialState: function () {
        return {isLoading: false, errMsg: undefined}
    },
    handleSearch: function (loc) {
        var that = this;
        if (loc.length == 0) {
            this.setState({isLoading: false, errMsg: "city's name is missing"});
        } else {
            this.setState({isLoading: true, errMsg: undefined});
            OpenWeather
                .getTemp(loc)
                .then(function (temp) {
                    that.setState({location: loc, temp: temp, isLoading: false});
                }, function (e) {
                    that.setState({isLoading: false, errMsg: e.message});
                });
        }
    },
    render: function () {
        var {isLoading, temp, location, errMsg} = this.state;

        function renderMsg() {
            if (isLoading) {
                return <h3 className="text-center">Fetching Weather..</h3>;
            } else if (temp && location) {
                return <WeatherMsg location={location} temp={temp}/>;
            }
        }
        function renderErr() {
            if (typeof errMsg === "string") {
                return <ErrorModal msg={errMsg}/>;
            }
        }

        return (
            <div>
                <h3 className="text-center">Get Weather</h3>
                <WeatherForm onSearch={this.handleSearch}/> 
                {renderMsg()}
                {renderErr()}
            </div>
        )
    }
});

module.exports = Weather;