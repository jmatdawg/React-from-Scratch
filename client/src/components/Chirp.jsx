import React from 'react';

function Chirp(props) {
    return (
        <div>
            <h2>{ props.chirp.name }</h2>
            <h3>{ props.chirp.message }</h3>
        </div>
    );
}

export default Chirp;