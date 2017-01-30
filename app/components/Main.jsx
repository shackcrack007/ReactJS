var React = require('react');
var Nav = require('Nav');
var Weather = require("Weather");

var Main = (props) => {
    return (
        <div>
            <Nav/>
            <h1>main compo
            </h1>
            {props.children}
        </div>
    )
};

module.exports = Main;