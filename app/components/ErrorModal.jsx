var React = require("react");

var ErrorModal = React.createClass({
    getDefaultProps: function () {
        return {title: "Error"};
    },
    propTypes: {
        title: React.PropTypes.string,
        msg: React.PropTypes.string.isRequired
    },
    componentDidMount: function () {
        var modal = new Foundation.Reveal($('#error-modal'));
        modal.open();
    },
    render: function () {
        var {title, msg} = this.props;
        return (
            <div className="reveal tiny text-center" id="error-modal" data-reveal="">
                <h4>{title}</h4>
                <p>{msg}</p>
                <p>
                    <button className="button" data-close="">Ok</button>
                </p>
            </div>
        );
    }
});

module.exports = ErrorModal;