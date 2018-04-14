import React from 'react';

// Div that displays background image and passes search as child
const BG = (props) => (
    <div className="mainBackground">
        {props.children}
    </div>
);

export default BG;