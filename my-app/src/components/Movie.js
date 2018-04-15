import React, { Component } from 'react'
import MovieTitle from './MovieTitle';
import MovieDescription from './MovieDescription';


class Movie extends Component {
    render() {
        const style = {
          listStyleType: 'none'
        }
        const {data} = this.props;
        const Movie = data.map(movie => {
            return (
                <li key ={movie.id}>
                    <MovieTitle title = {movie.title}/>
                    <MovieDescription desc={movie.desc}/>
                    <img src= {movie.img}/>
                </li>
            )
        })
        return (
             <ul style={style}>
                { Movie }
            </ul>
        )
    }
}

export default Movie;