import React, { Component } from 'react';
import './styles.css'

export default class Movies extends Component {
    constructor(props){
        super(props)
        this.state = {
            clase: 'hide',
            mensaje: 'Ver Más'
        }
    }

    handleShow(){
        if(this.state.clase === 'hide'){
            this.setState({
                clase: 'show',
                mensaje: 'Ver Menos'
            })
            } else {
            this.setState({
                clase: 'hide',
                mensaje: 'Ver Más'
            })   
        }
    }

    render() {
        return (
            <div className='movieItem'>
               <img src={`https://image.tmdb.org/t/p/w500/${this.props.poster}`} alt="img" className='poster'/>
               <h5> {this.props.title} </h5>
               <p className='verMas' onClick={() => this.handleShow()}>{this.state.mensaje}</p>
               <p className={this.state.clase}> {this.props.overview} </p>
               <button onClick={()=> this.props.delete(this.props.title)} className="delete"> Delete </button>
            </div>
        )
    }
}