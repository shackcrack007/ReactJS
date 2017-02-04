var React = require('react');

var WeatherForm = React.createClass({
    onFormSubmit: function (e) {
        e.preventDefault();
        var loc = this.refs.location.value;
        this.refs.location.value == "";
            this
                .props
                .onSearch(loc);
    },
    render: function () {
        return (
            <div className="row">
                 <div className="medium-6 columns">
                <form onSubmit={this.onFormSubmit}>
                    <input type="text" ref="location"/>
                    <button className="button expanded hollow">Get Weather</button>
                </form>
            </div>
            </div>
        );
    }
});

module.exports = WeatherForm;