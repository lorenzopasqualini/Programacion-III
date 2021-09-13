import React, { Component } from 'react';
export default class Filtro extends Component {
    constructor() {
        super();
        this.state = {
            value: ""
        }
    }
    noSubmit(event) {
        event.preventDefault();
    }
    inputFilter(event) {
        this.setState(
            {value: event.target.value},
            () => this.props.filterFunc(this.state.value)
        )
    }
    render() {
        return (
            <form onSubmit={(event) => this.noSubmit(event)}>
                <label> Movie: </label>
                <input onChange={(event) => this.inputFilter(event)} type="text" />
            </form>
        )
    }
}