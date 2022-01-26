import React, { Component } from 'react';

export default class Filtro extends Component {
    constructor() {
        super();
        this.state = {
            value: ''
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
            <div>
                <form onSubmit={(event) => this.noSubmit(event)}>
                    <input onChange={(event) => this.inputFilter(event)} type="text" className='search' />
                </form>
            </div>
        )
    }
}