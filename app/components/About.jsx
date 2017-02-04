var React = require('react');
$("p")
var About = (props) => {
    return (
        <div className="row">
            <h1 className="text-centered">About Compo</h1>
            <p>yo mangulaaaaa</p>
            <p>
                
            </p>
                <div className="columns medium-6 large-4 small-centered">
                    {props.children}
                </div>
            </div>
    
    )
};

module.exports = About;