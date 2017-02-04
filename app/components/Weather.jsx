var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMsg = require('WeatherMsg');
var OpenWeather = require('OpenWeather');

var Weather = React.createClass({
    getInitialState: function () {
        return {isLoading: false}
    },
    handleSearch: function (loc) {
        var that = this;
        debugger;
        this.setState({isLoading: true});
        OpenWeather
            .getTemp(loc)
            .then(function (temp) {
                that.setState({location: loc, temp: temp, isLoading: false});
            }, function (errMsg) {
                alert(errMsg);
                that.setState({isLoading: false});
            });
    },
    render: function () {
        var {isLoading, temp, location} = this.state;

        function renderMsg() {
            if (isLoading) {
                return <h3 className="text-center">Fetching Weather..</h3>;
            } else if (temp && location) {
                return <WeatherMsg location={location} temp={temp}/>;
            }
        }

        return (
            <div>
                <h3 className="text-center">
                    Get Weather
                </h3>
                <WeatherForm onSearch={this.handleSearch}/> {renderMsg()}
            </div>
        )
    }
});

module.exports = Weather;