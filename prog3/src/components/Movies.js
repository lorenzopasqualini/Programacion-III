import React, { Component } from 'react';

export default class Movies extends Component {
    constructor(props){
        super(props)
        this.state = {
            clase: 'hide',
            mensaje: 'ver más'
        }
    }

    handleShow(){
        if(this.state.clase === 'hide'){
            this.setState({
                clase: 'show',
                mensaje: 'ver menos'
            })
            } else {
            this.setState({
                clase: 'hide',
                mensaje: 'ver mas'
            })   
        }
    }

    render() {
        return (
            <div>
               <img src={`https://image.tmdb.org/t/p/w500/${this.props.poster}`} alt="img"/>
               <h5> {this.props.title} </h5>
               <p className='more' onClick={() => this.handleShow()}>{this.state.mensaje}</p>
               <p className={this.state.clase}> {this.props.overview} </p>
            </div>
        )
    }
}