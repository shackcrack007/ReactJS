var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = (props) => {
    return (
        <div>
            <h2>nav
            </h2>
            <IndexLink
                to="/"
                activeClassName="active"
                activeStyle={{
                fontWeight: "bold"
            }}>Get Weather</IndexLink>
            <IndexLink
                to="/about"
                activeClassName="active"
                activeStyle={{
                fontWeight: "bold"
            }}>About</IndexLink>
            <IndexLink to="/examples" activeClassName="active">Examples</IndexLink>
            <a href="#/about" activeClassName="active">go to about</a>
        </div>
    );
};
module.exports = Nav;