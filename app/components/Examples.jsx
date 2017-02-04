var React = require('react');
var {Link} = require('react-router');

var Examples = React.createClass({
    render: function () {
        return (
            <div>
                <h1 className="text-center">
                    Examples</h1>
                <p className="text-center">here are a few examples locations:</p>
                <ol>
                    <li>
                        <Link to="/?location=Jerusalem">Jerusalem</Link>
                    </li>
                    <li>
                        <Link to="/?location=Tel Aviv">Tel Aviv</Link>
                    </li>
                </ol>
            </div>
        );
    }
});

module.exports = Examples;