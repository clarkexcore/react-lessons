import React from 'react';

//props can be anything but is universally used by this
//props.children are is whatever is between <Person></Person on the app.js file
const person = (props) => {
    return (
        <div>
            <p>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
        </div>
    );
};

export default person;