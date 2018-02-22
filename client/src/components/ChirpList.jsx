import React, { Component, Fragment } from 'react';
import GrabList from './GrabList';

class ChirpList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            chirps: []
        };
    }
    componentDidMount() {
        fetch("http://localhost:8000/api/chirps")
            .then(res => res.json())
            .then(data => this.setState({ chirps: data }));
    }

    render() {
        return (
            <Fragment>
                <GrabList chirps={ this.state.chirps }/>
            </Fragment>
        )
    }
}           
export default ChirpList;