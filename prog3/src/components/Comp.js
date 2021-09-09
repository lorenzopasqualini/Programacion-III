import React, { Component } from 'react';
import Movies from './Movies'
import './styles.css'

export default class Comp extends Component{
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            filterMovies: []
        }
    }

    componentDidMount(){
        fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=0e3afdb0602092f1f215f06c2057dbc0&language=en-US&page=1')
            .then(response => { return response.json() })
            .then(data => {
                console.log(data.results);
                this.setState({
                    movies: data.results
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

    render(){
        return (
            <div className='movieComponent'>
                {this.state.movies === [] ?
                    <h4> Cargando </h4>:
                    this.state.movies.map((props, index) => {
                        return <Movies key={index} poster={props.poster_path} title={props.original_title} overview={props.overview} delete={(title)=>{this.delete(title)}} />
                    })
                }
            </div>
        )
    }
}