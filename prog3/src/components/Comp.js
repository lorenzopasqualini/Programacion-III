import React, { Component } from 'react';
import Movies from './Movies'

export default class Comp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: []
        }
    }

    componentDidMount() {
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

    render() {
        return (
            <div>
                {this.state.movies === [] ?
                    <h4> Cargando </h4>:
                    this.state.movies.map((props, index) => {
                        return <Movies key={index} poster={props.poster_path} title={props.original_title} overview={props.overview} />
                    })
                }
            </div>
        )
    }
}