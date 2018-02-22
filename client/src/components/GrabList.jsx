import React, { Component, Fragment } from 'react';
import Chirp from './Chirp';

function GrabList(props) {
    const grab = props.chirps.map((currentChirps) => {
        console.log(grab);
        return (
            <div key={ currentChirps.id }> 
                <Chirp chirp = { currentChirps } />
            </div>
        );
    });

    return (
        <div>
            { grab }
        </div>
    );
}

export default GrabList;

//the div has to give each chirp a unique id (currentChirps.id)
//ask about line 9 