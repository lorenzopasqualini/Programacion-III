import React, { Component } from 'react';
import Movies from './Movies'
import './styles.css'
import Filtro from './Filtro';

export default class Comp extends Component{
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            filterMovies: [],
            page: 2
        }
    }

    componentDidMount(){
        fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=0e3afdb0602092f1f215f06c2057dbc0&language=en-US&page=1')
            .then(response => { return response.json() })
            .then(data => {
                console.log(data.results);
                this.setState({
                    movies: data.results,
                    filterMovies: data.results,
                })
            })
            .catch(e => console.log(e));
    }

    delete(title){
        const movieDelete = this.state.movies.filter(movie=> movie.title !== title)
        this.setState({
            movies: movieDelete,
            filterMovies: movieDelete
        })
    }

    filterFunc(name) {
        console.log(name);
        const arrayFiltrada = this.state.movies.filter(data => data.title.toLowerCase().includes(name.toLowerCase()));
        if (name === "") {
            this.setState({
                filterMovies: this.state.movies
            })
        } else {
            this.setState({
                filterMovies: arrayFiltrada
            })
        }
    }
    
    addCards(){
        fetch(`http://api.themoviedb.org/3/movie/popular?api_key=0e3afdb0602092f1f215f06c2057dbc0&page=${this.state.page}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            let arrayPrevio = this.state.movies;
            let arrayActualizado = arrayPrevio.concat(data.results);
            let paginaActualizada = this.state.page + 1;
            
            this.setState({
                movies: arrayActualizado,
                filterMovies: arrayActualizado,
                page: paginaActualizada
            })
        })
    }
    
    render(){
        return (
            <div>
                <div className='d-flex justify-content-evenly'>
                    <Filtro filterFunc={(name)=> this.filterFunc(name)} /> 
                    <button id='agregarMas' onClick={()=>this.addCards()} className="agregar">Agregar mas</button>   
                </div>
                <div className='movieGrid'>
                    {
                        this.state.filterMovies.map((props, index) => {
                            return <Movies key={index} poster={props.poster_path} title={props.title} overview={props.overview} delete={(title)=>{this.delete(title)}} />
                        })
                    }
                </div>
            </div>
        )
    }
       
}
